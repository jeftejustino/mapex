import styles from 'styled-components'

export const Container = styles.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f00;
`

export const Content = styles.div`
  margin: 0px;
  overflow: hidden;
  flex-grow:1;
  border: none;
  position: relative;
`

export const Map = styles.div`
    background: #0f0;
    height: 100%;
    position: relative;
    z-index: 1;
    > div{
      widht: 100%;
      height: 100%;
    }
`

export const Info = styles.div`
    background: #fff;
    padding: 30px 20px;
    overflow-y: auto;
    position: absolute;
    top: 0px;
    right: ${(props) => (props.toogle ? '0px' : '-600px')};
    transition: 0.2s all;
    width: 600px;
    height: 100%;
    z-index: 2;
    
    img{
      max-width: 380px;
      margin: auto;
      display: block;
    }

    .title{
      text-align: center;
      font-size: 32px;
      margin: 20px  0px 30px;
    }

    .desc{
      margin-top: 20px;
      line-height:1.5;
      white-space: break-spaces;
    }

`
