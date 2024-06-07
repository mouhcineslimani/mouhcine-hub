import React from 'react'
import styled from 'styled-components'
import { bgColorPrimary, neutral, typeScale } from '../../utils'
import { Link, NavLink } from 'react-router-dom' 

const SideBarContainer = styled.div`
    width: 20%; 
    background: ${neutral[300]}; 
    padding: 15px;
    display: flex;
    flex-direction: column;
    & > * {
        width: 100%;
    } 
`

const SideBarTitle = styled(Link)`
    text-align: center;
    font-size: ${typeScale.header3};
    background: ${bgColorPrimary[100]};
    padding: 20px; 
    text-decoration: none; 
    color: ${neutral[600]};
    &:hover {
        color: ${neutral[100]};
    }
`

const SideBarLinksContaniner = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 2px;
    padding-left: 20px; 
    &>* {
        height: 50px; 
        padding: 15px 2px;
    }
`

const SideBarLink = styled(NavLink)`
    text-decoration: none;  
    color: ${neutral[600]};   
    &:hover,  &.active {
        color: ${bgColorPrimary[100]};
        border-bottom: 2px solid ${bgColorPrimary[100]};
    }
`



export default function SideBar() {
  return (
    <SideBarContainer>
        <SideBarTitle to='/admin/dashboard'>Admin Space</SideBarTitle>
        <SideBarLinksContaniner>
            <SideBarLink to="/admin/dashboard">Dashboard</SideBarLink>
            <SideBarLink to="/admin/articles">Articles</SideBarLink>
            <SideBarLink to="/admin/chapiters">Chapiters </SideBarLink>
            <SideBarLink to="/admin/comments">Comments</SideBarLink> 
            <SideBarLink to="/admin/categories">Categories</SideBarLink> 
        </SideBarLinksContaniner>
    </SideBarContainer>
  )
}
