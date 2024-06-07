import React from 'react'
import styled from 'styled-components'
import { neutral, typeScale } from '../../utils'
import { Link } from 'react-router-dom'

const TitleContainer = styled.div`
    width: 100%;
    padding: 10px;
    background: ${neutral[300]};
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 10px;
`

const Title = styled.p`
    font-size: ${typeScale.paragraph};
    font-weight: 200;
    text-decoration: none;
    color: ${neutral[600]};
    padding :0 ;
    margin: 0;
`

export default function TitleSection({path}) { 
  const navigation = path.split('/').slice(1).join(' > ');  
  return (
    <TitleContainer>
      <Title>{navigation}</Title> 
    </TitleContainer>
  )
}
