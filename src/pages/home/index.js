import React, { useCallback, useState, useEffect } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import Banner from '../../components/banner'
import { Container, Content, Map, Info } from './styles'
import points from './points'

function Home() {
  const [showInfo, setShowInfo] = useState(false)
  const [map, setMap] = useState(null)
  const center = [-3.7433500964236024, -38.575283288955696]
  const zoom = 16
  const [position, setPosition] = useState()
  const [currentPoint, setCurrentPoint] = useState({
    id: 0,
    title: '',
    desc: '',
    soundcloud: '',
    latLng: center,
  })

  function markerClick(e, point) {
    let overlayWidth = 0
    if (showInfo && point.id !== currentPoint.id) {
      overlayWidth = -300
    } else if (point.id !== currentPoint.id) {
      setShowInfo(true)
      overlayWidth = -300
    } else if (showInfo) {
      setShowInfo(false)
      overlayWidth = 0
    } else {
      setShowInfo(true)
      overlayWidth = -300
    }

    const centerPoint = e.containerPoint
    // const centerPoint = map.latLngToLayerPoint(point.latLng)
    const targetPoint = centerPoint.subtract([overlayWidth, 0])
    const targetLatLng = map.containerPointToLatLng(targetPoint)
    // L.popup().setLatLng(point.latLng).setContent(point.title).openOn(map)
    map.panTo(targetLatLng)
    setCurrentPoint(point)
  }

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    if (map) {
      map.on('dblclick', onMove)
      return () => {
        map.off('dblclick', onMove)
      }
    }

    return false
  }, [map, onMove])

  return (
    <Container>
      <Banner />
      <Content>
        <Map toogle={showInfo}>
          <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            whenCreated={setMap}
            doubleClickZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {points.map((point) => (
              <Marker
                key={point.id}
                position={point.latLng}
                eventHandlers={{
                  click: (e) => {
                    markerClick(e, point)
                  },
                }}
              />
            ))}
          </MapContainer>
        </Map>
        <Info toogle={showInfo}>
          <img src={currentPoint.pictograma} alt='pictograma' />

          <div className='title'>{currentPoint.title}</div>

          <iframe
            width='100%'
            height='166'
            scrolling='no'
            title='soundcloud'
            frameBorder='no'
            allow='autoplay'
            src={currentPoint.soundcloud}
          />

          <div className='desc'>{currentPoint.desc}</div>
          <div className='refs'>
            {currentPoint?.refs &&
              currentPoint?.refs.map((item) => (
                <a
                  target='_blank'
                  rel='noreferrer'
                  alt='Referencia'
                  href={item}
                >
                  {item}
                </a>
              ))}
          </div>
        </Info>
      </Content>
    </Container>
  )
}

export default Home
