import styled from 'styled-components';
import logo from '../../logo.svg'

const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
color: #000;
`
const ImageLogo = styled.img`
width: 50px;
height: auto;
object-fit: contain;
`

function Logo() {
  return (
    <LogoContainer>
      <ImageLogo src={logo} alt="" />
      <p><b>Project</b> Analyzer</p>
    </LogoContainer>
  );
}

export default Logo;
