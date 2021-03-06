import React, { useCallback, useState, useEffect } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import Banner from '../../components/Banner'
import Select from '../../components/Select'
import { Container, Content, Map, Info, SelectContent } from './styles'
import points from './points'

function Home() {
  const [showInfo, setShowInfo] = useState(false)
  const [map, setMap] = useState(null)
  const center = [-3.7410376089989086, -38.55677604675294]
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

    if (e) {
      const centerPoint = e.containerPoint
      const targetPoint = centerPoint.subtract([overlayWidth, 0])
      const targetLatLng = map.containerPointToLatLng(targetPoint)
      map.panTo(targetLatLng)
      setCurrentPoint(point)
    } else {
      setCurrentPoint({
        id: 0,
        title: '',
        desc: '',
        soundcloud: '',
        latLng: center,
      })
    }
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
        <SelectContent>
          <Select points={points} currentPoint={currentPoint} />
        </SelectContent>
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
          <button
            className='close'
            type='button'
            onClick={() => markerClick(null, currentPoint)}
          >
            X
          </button>
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
            <h3>Fonte:</h3>
            {currentPoint?.refs &&
              currentPoint?.refs.map((item) => (
                <div>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    alt='Referencia'
                    href={item}
                  >
                    {item}
                  </a>
                </div>
              ))}
          </div>
        </Info>
      </Content>
    </Container>
  )
}

export default Home
