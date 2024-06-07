import React, { useRef, useState } from 'react'
import { AuthBody, AuthContainer, AuthFormContainer, AuthImageContainer, AuthTitle, GoToLink, Icon, Input, InputBox, MessageContainer, MessageText } from '../components/authStyledComponents/auth.components'
import { useDispatch, useSelector } from 'react-redux';

import Auth from '../api/auth.api'; 
import { profileError, profileStart, profileSuccess } from '../redux/features/authSlice';
const auth = new Auth();

export default function Profile() {
  const {user,isLoading,errors} = useSelector(state => state.auth); 
  const fileInputRef = useRef(null); 
  const [updated, setUpdated] = useState(false);
  const [userProfile, setUserProfile] = useState({
    fullname: user.fullname, 
    password: '', // Initialize password separately if needed
  });

  const dispatch = useDispatch(); 
  const handleChange = (e) => { 
   setUserProfile({...userProfile, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    setUpdated(false);
    let userUpdated = {};
    if(userProfile.fullname === ''){
      dispatch(profileError({ message: {message: 'Please fill in Fullname field'}})); 
      return;
    }
    userProfile.password === '' 
      ? userUpdated = { ...user , fullname:userProfile.fullname} 
      : userUpdated = {...user,...userProfile};
      try {
        dispatch(profileStart());
        const response = await auth.changeProfileData(userUpdated); 
        if(response.success) {
          setTimeout(()=>{
            dispatch(profileSuccess(response.data));
            setUpdated(true);
          },1000);
        }
        else
          dispatch(profileError(response.error));
      } catch (error) {
        dispatch(profileError(error)); 
      }
  }


const readFile = file => {
  const reader = new FileReader()

  reader.addEventListener('progress', event => {
      const percent = Math.round((event.loaded / event.total) * 100)
      console.log(`Progress: ${percent}%`)
      const loadingBar = Array(10)
          .fill('▒')
          .map((_, index) => Math.round(percent / 10) > index ? '█' : '▒')
          .join('')

      document.location.hash = `${loadingBar}(${percent}%)`
      if (percent === 100) {
        setUploaded(true)
    }
  })

  reader.readAsText(file)
}

  const handleProfilePictureChange = async (event) => {
    setUpdated(false);
    const file = event.target.files[0];
    if (file) {  
      readFile(file);
      dispatch(profileStart());
      try {
        const response = await auth.changeProfilePicture(file, user.id);
        if(response.success){ 
          setTimeout(()=>{
            dispatch(profileSuccess(response.data));
            setUpdated(true);
          },1000);
        }
        else
          dispatch(profileError(response.error));
      } catch (error) {
        dispatch(profileError(error)); 
      }
    }
  }

 

const handleClickProfilePicture = () => {
  // Trigger the click event on the hidden file input
  fileInputRef.current.click();
};



  return (
    <AuthContainer>
      <AuthBody>
        <AuthImageContainer>
          <input type="file" id="profile" style={{display:"none"}} ref={fileInputRef} onChange={handleProfilePictureChange} accept="image/*" />
          <img src={user.profile ? `/api/images/${user.profile}` : 'https://fakeimg.pl/600x650' } onClick={handleClickProfilePicture} alt="Profile's user" style={{cursor:"pointer"}} title='Click to update it' />
        </AuthImageContainer>
        <AuthFormContainer>
          <AuthTitle>Profile</AuthTitle>
          {errors && <MessageText error={"error"}>{errors.message.message}</MessageText>}
          {
           updated
            && <MessageText>✅ Your profile has been updated </MessageText>
          }
          {
          isLoading
            && <MessageText>⏳ Your profile is changing...</MessageText>
          }
          <InputBox>
            <Icon className='fa fa-user'></Icon>
            <Input type="text" placeholder='Fullname...' name="fullname" onChange={handleChange}   value={userProfile.fullname}/>
          </InputBox>
          <InputBox>
            <Icon className='fa fa-envelope'></Icon>
            <Input type="email" placeholder='Email...' name="email"  defaultValue={user.email} readOnly disabled />
          </InputBox>
          <InputBox>
            <Icon className='fas fa-critical-role'></Icon>
            <Input type="text" placeholder='Type...' name="type" defaultValue={user.type} readOnly disabled/>
          </InputBox>
          <InputBox>
            <Icon className='fa fa-lock'></Icon>
            <Input type="password" placeholder='Password...' name="password" onChange={handleChange}   value={userProfile.password} />
          </InputBox>
          <InputBox>
            <Input type="submit" value={isLoading ? 'Updating...' : 'Update'} width="100%" onClick={handleSubmit} disabled={isLoading} />
          </InputBox>
        </AuthFormContainer>
      </AuthBody>
    </AuthContainer>
  )
}
