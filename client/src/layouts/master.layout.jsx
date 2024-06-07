import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const AppContainer = styled.div`
    min-height: 100vh; 
    font-size: 1.5rem;
    color: #333;
    text-align: center;
    `
const Container = styled.main`
    margin-top: 71px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 3rem;
    color: #333;
    text-align: center;  
`
export default function Master() {
  return (
    <AppContainer>
       <Header/>
        <Container>
            <Outlet/>
        </Container>
        <Footer/>
    </AppContainer>
  )
}

