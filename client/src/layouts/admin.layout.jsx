import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { neutral } from '../utils'
import SideBar from '../components/admin/SideBar' 
import Header from '../components/admin/Header'
import { Outlet, useLocation } from 'react-router-dom'
import TitleSection from '../components/utils/TitleSection'


const AdminContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${neutral[200]};
    display: flex;
`


const ContentContainer = styled.div`
    width: 80%; 
    display: flex;
    flex-direction: column;
    gap: 10px; 
`

const MainContentContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
`

export default function Admin() {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);
    useEffect(()=>{
        setPath(location.pathname);
    },[path,location]);

  return (
    <AdminContainer> 
        <SideBar/> 
        <ContentContainer>
            <Header/>
            <MainContentContainer>
                <TitleSection path={path}/>
                <Outlet/>
            </MainContentContainer>
        </ContentContainer>
    </AdminContainer>
  )
}
