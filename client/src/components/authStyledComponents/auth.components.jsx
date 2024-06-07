
import styled from 'styled-components' 
import { bgColorPrimary, neutral, red, typeScale } from '../../utils'
import { Link } from 'react-router-dom'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%; 
  background: ${neutral[200]};
  padding : 30px;  
`

export const AuthFormContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap:0.5rem; 
   width: 45%;
   height: 100%;
`

export const AuthTitle = styled.p`
  font-size: ${typeScale["header1"]};
  margin-top: 0;
`
export const AuthBody = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; 
`
export const AuthImageContainer = styled.div`
  width: 55%;
  background-color: ${neutral[300]};
  box-shadow: 0 0 2px ${neutral[600]}; 
  img {
    width: 100%;  
  }
` 

export const InputBox = styled.div`
  display: flex;  
  align-items: center; 
  width: 100%; 
  border: 1px solid ${neutral[300]};
`

export const Input = styled.input`
  width: ${props => props.width || '87%'};
    height: 40px;
    outline: none;
    border: none;
    font-size: ${typeScale["paragraph"]};
    padding-left: 10px;
    background: ${props => props.type === "submit" ? bgColorPrimary[100] : ""};
    color: ${props => props.type === "submit" ? neutral[100] : ""}; 
    cursor: ${props => props.type === "submit" ? "pointer" : ""};
    
    ${
      props => props.type === "submit" && `
        &:hover {
          background: ${bgColorPrimary[400]};
          color: ${neutral[600]};
        }
        `
    } 
`

export const Icon = styled.i`
  width: ${props => props.width || '13%'};
  font-size: 22px;
  &:hover {
    color: ${bgColorPrimary[100]};
    transform: rotate(50deg) scale(1.5); // rotate 45 degrees and scale 1.5 times
  }
`

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${neutral[300]};
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const DividedContainer = styled.div`
  position: relative;
`
export const DevidedText = styled.p`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${typeScale["header3"]};
  background: ${neutral[200]};
  padding: 2px;
`

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const MessageText = styled.p`
  font-size: ${typeScale["helperText"]}; 
  text-align: center;
  margin: 0;
  color: ${props => props.error ? red[100] : neutral[600]};
`

export const GoToLink = styled(Link)`
  font-size: ${typeScale["helperText"]};
  color: ${bgColorPrimary[100]};
  text-decoration: none;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    color: ${neutral[600]}; 
    font-weight: 600;
  }
`
