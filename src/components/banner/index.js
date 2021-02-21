import React from 'react'
import { Banner } from './styles'

import banner from '../../assets/images/logo_padrao.svg'
// import banner from '../../assets/images/logo_preto.svg'

function ComponentBanner() {
  return (
    <Banner>
      <img src={banner} alt='Banner' />
    </Banner>
  )
}

export default ComponentBanner
