import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { bgColorPrimary, neutral, typeScale } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Auth from '../../api/auth.api'
import { logoutError, logoutStart, logoutSuccess } from '../../redux/features/authSlice'

const auth = new Auth();


const HeaderContainer = styled.header`
    width: 100%;
    background: ${neutral[300]};
    padding: 15px 20px;
    display: flex; 
    align-items: center;
    gap :10px;
    &>* {
        flex: 1;  
    }
`

const HeaderSearchContainer = styled.div`
    display: flex;   
    width: 80%;
    border-bottom: solid 2px ${bgColorPrimary[100]}; 
    padding: 5px;
`

const HeaderSearchinput = styled.input`
    outline: none;
    border: none; 
    background: ${neutral[300]};
    width: 90%;
    padding-left: 10px;
`

const HeaderSearchIcon = styled.i`
    width: 10%;
    background: ${bgColorPrimary[100]};
    padding: 4px;
    text-align: center;
    color: ${neutral[100]};
    cursor: pointer;
`

const HeaderBtnsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
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

export default function Header() {

    const [showDropdown, setShowDropdown] = useState(false);
    const {user, isAuthenticated} = useSelector (state=>state.auth)
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            console.log(error);
            dispatch(logoutError({ message: 'An error occurred while signing in' }));
          }
    }


  return (
    <HeaderContainer>
        <div>
        <HeaderSearchContainer>
            <HeaderSearchinput type="text" placeholder='Search...'/>
            <HeaderSearchIcon className='fa fa-search'/>
        </HeaderSearchContainer> 
        </div>
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
                                <DropdownLink onClick={logoutHandler}>Logout</DropdownLink>
                            </DropdownContent>
                        }
                    </Dropdown>)
                }
            </HeaderBtnsContainer>
    </HeaderContainer>
  )
}
