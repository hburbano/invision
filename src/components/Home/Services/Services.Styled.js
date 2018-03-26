import styled from 'styled-components'
import Services from './Services'

const ServicesStyled = styled(Services)`
  width: 100%;
  height: 793px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.118886);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.white};

  .left {
    background-image: url(${props => props.theme.assets.kioskSide});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 75%;
    width: 50%;
  }

  .right {
    width: 50%;
  }
`
export default ServicesStyled