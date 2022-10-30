// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: Bold;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10%;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const MainContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

// @media screen and ( max-width:"768px"){
//     export const AppContainer=styled.div`
//     flex-direction:"column";`
//     export const MainContainer=styled.div`
// width:100%;
// `
// }

export const Label = styled.label`
  font-size: 18px;
  font-family: 'Roboto';
  color: '#7e858e';
`
export const Input = styled.input`
  height: 35px;
  color: #7e858e;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  font-size: 25px;
  color: white;
  font-family: 'Roboto';
  height: 40px;
  width: 150px;
  cursor: pointer;
  outline: none;
`

export const ImageContainer = styled.div`
  display: flex;
  //   display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    background-size: cover;
    height: 100vh;
  }
`
export const Paragraph = styled.p`
  color: white;
  font-family: 'Roboto';
  text-align: center;
  font-size: ${props => props.font}px;
`
