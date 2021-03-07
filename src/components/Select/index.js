import React, { useEffect, useState } from 'react'
import { Content, ReactSelect } from './styles'

function ComponentSelect({ points, currentPoint, onChange }) {
  const [options, setOptions] = useState([])
  const [defaultValue, setDefaultValue] = useState([])

  useEffect(() => {
    if (points) {
      const opts = points.map((item) => {
        const obj = {
          value: item.id,
          label: item.title,
        }

        return obj
      })
      setOptions(opts)
    }
  }, [points])

  useEffect(() => {
    setDefaultValue({
      value: currentPoint.id,
      label: currentPoint.title,
    })
  }, [currentPoint])

  return (
    <Content>
      <ReactSelect options={options} value={defaultValue} onChange={onChange} />
    </Content>
  )
}

export default ComponentSelect
