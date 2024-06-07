import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { bgColorPrimary, neutral, textColor, textColorHover } from './../utils/colors';
import { Link, useNavigate } from 'react-router-dom'; 
import { typeScale } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { logoutError, logoutStart, logoutSuccess } from '../redux/features/authSlice';
import Auth from '../api/auth.api';

const auth = new Auth();
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem; 
    background-color: ${neutral[300]};
    box-shadow: 0 0 2px ${neutral[600]}; 
    position: fixed;
    top: 0;
    width: 100%;
`;

const HeaderLogo = styled.div`
    font-size: ${typeScale["header1"]};
    color: ${textColor};
    cursor: pointer;
`;

const HeaderLogoName = styled.span`
    font-size: ${typeScale["header1"]};
    color: ${textColor};
    background-color: ${bgColorPrimary[100]};
    padding: 0.2rem 0.5rem;
    color: ${neutral[100]};
    border-radius: 0.2rem;
`;

const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderLink = styled(Link)` 
    margin-bottom: 15px;
    margin: 0 1rem;
    color: ${neutral[600]};
    text-decoration: none;
    cursor: pointer;
    transition: 0.15s;
    &:hover {
        color: ${bgColorPrimary[100]};
    }
    img {
        border: 2px solid ${bgColorPrimary[100]};
        box-shadow: 3px 4px 2px ${neutral[500]};
    }
`;

const HeaderBtnsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderBtnIcon = styled.i` 
    margin: 0 0.2rem;
    padding: 0.5rem;
    width: 2.5rem;
    border: none;   
    cursor: pointer;
    transition: 0.15s;
    color: ${neutral[100]};
    text-align: center;
    background-color: ${bgColorPrimary[100]}; 
    &:hover {
        color: ${neutral[600]};
        background-color: ${bgColorPrimary[400]};
    } 
`;

const DropdownContent = styled.div`
    display: ${props => props.showDropdown ? 'block' : 'none'};
    position: absolute; 
    top: 2.8rem;
    right: 1.2rem;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const DropdownLink = styled(Link)`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: 0.15s;
    font-size: ${typeScale["paragraph"]};
    &:hover {
        background-color: ${bgColorPrimary[100]};
        color: ${neutral[100]};
    }
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated,user}= useSelector(state => state.auth);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const showDropdownContainer = (e) => {
        e.preventDefault(); 
        setShowDropdown(!showDropdown); 
    }

const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleScroll = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    const logoutHandler = async (e) => {
        e.preventDefault();
        dispatch(logoutStart()); 
        setShowDropdown(false);
        localStorage.removeItem('persist:root');
        try {
            const data = await auth.logout(); 
            if (data.success) {
              dispatch(logoutSuccess());
             
              navigate('/sign-in');
            } else {
              dispatch(logoutError(data.error));
            }
          } catch (error) {
            dispatch(logoutError({ message: 'An error occurred while signing in' }));
          }
    }
    return (
        <HeaderContainer>
            <HeaderLogo><HeaderLogoName>Mouhcine's</HeaderLogoName> Hub</HeaderLogo>
            <HeaderLinks>
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/articles">Articles</HeaderLink> 
            </HeaderLinks>
            <HeaderBtnsContainer>
                <HeaderBtnIcon className='fa fa-moon'/>
                {
                    !isAuthenticated ? (<HeaderLink to="/sign-in"> <HeaderBtnIcon className='fa fa-right-to-bracket'/> </HeaderLink>) : (<Dropdown>
                        <HeaderLink to="#" className='dropDown' onClick={showDropdownContainer}>
                            {
                                user && user.profile ? <img src={`/api/images/${user.profile}`} alt="profile" style={{width: '2.1rem', height: '2.1rem', borderRadius: '45%', objectFit: 'cover'}}/> : <HeaderBtnIcon className='fa fa-user-circle'/>
                            } 
                        </HeaderLink>
                        {
                            showDropdown && <DropdownContent showDropdown={"yes"} ref={dropdownRef}>
                                <DropdownLink to="/profile">Profile</DropdownLink>
                                {
                                    user && user.type === 'admin' && <DropdownLink to="/admin/dashboard">Dashboard</DropdownLink>
                                }
                                <DropdownLink onClick={logoutHandler}>Logout</DropdownLink>
                            </DropdownContent>
                        }
                    </Dropdown>)
                }
            </HeaderBtnsContainer>
        </HeaderContainer>
    )
}

export default Header;
