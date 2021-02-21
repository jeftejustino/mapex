import styles from 'styled-components'
import texture from '../../assets/images/textura.svg'

export const Banner = styles.div`
  margin: 0;
  border: none;
  display: flex;
  justify-content: center;
  text-align:center;
  background: #ef5851;
  background-size: 280px;
  background-image: url(${texture});

  img{
    margin: 0;
    border: none;
    height: 245px;
  }
`
