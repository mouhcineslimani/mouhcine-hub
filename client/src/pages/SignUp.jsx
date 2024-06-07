import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpStart, signUpSuccess, signUpError } from '../redux/features/authSlice';
import Auth from '../api/auth.api';
import { Illustrations } from '../assets/svg';
import {
  AuthBody,
  AuthContainer,
  AuthFormContainer,
  AuthImageContainer,
  AuthTitle,
  DevidedText,
  DividedContainer,
  GoToLink,
  Icon,
  Input,
  InputBox,
  Line,
  MessageContainer,
  MessageText,
  SocialMediaContainer
} from '../components/authStyledComponents/auth.components.jsx';
 
const auth = new Auth();

const SignUp = () => {
  const [signUpUserData, setSignUpUserData] = useState({ fullname: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, errors , isAuthenticated } = useSelector(state => state.auth); 
  useEffect(() => {
    if (isAuthenticated) 
        navigate('/');  
  }, [isAuthenticated,navigate]);


  const handleChange = (e) => {
    setSignUpUserData({ ...signUpUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    userCreated(false);
    e.preventDefault();
    if (!signUpUserData.fullname || !signUpUserData.email || !signUpUserData.password) {
      dispatch(signUpError({ message : { message: 'Please fill in all fields' }}));
      return;
    }

    dispatch(signUpStart());

    try {
      const data = await auth.signUp(signUpUserData);
     
      if (data.success) {
       setTimeout(()=>{
        dispatch(signUpSuccess(data));
        navigate('/sign-in'); 
       },1000);
      } else {
        dispatch(signUpError(data.error));
      }
    } catch (error) {
      dispatch(signUpError({ message: { message: 'An error occurred while signing up' }}));
    }
  };

  return (
    <AuthContainer>
      <AuthBody>
        <AuthImageContainer>
          <img src={Illustrations.SignUpSvg} alt="Sign up for an account!" /> 
        </AuthImageContainer>
        <AuthFormContainer> 
            <AuthTitle>Sign Up</AuthTitle>
            {errors && <MessageText error={'yes'}>{errors.message}</MessageText>}
            <InputBox>
              <Icon className='fa fa-user'></Icon>
              <Input type="text" placeholder='Fullname...' name="fullname" onChange={handleChange} />
            </InputBox> 
            <InputBox>
              <Icon className='fa fa-envelope'></Icon>
              <Input type="email" placeholder='Email...' name="email" onChange={handleChange} />
            </InputBox>  
            <InputBox>
              <Icon className='fa fa-lock'></Icon>
              <Input type="password" placeholder='Password...' name="password" onChange={handleChange} /> 
            </InputBox> 
            <InputBox>
              <Input type="submit" value={isLoading ? 'Signing up...' : 'Sign up'}  width={'100%'}  onClick={handleSubmit} disabled={isLoading} />
            </InputBox>
            <MessageContainer>
              <MessageText>Have an account?</MessageText>
              <GoToLink to={"/sign-in"}>Sign in</GoToLink>
            </MessageContainer>
            <DividedContainer>
              <Line/> 
              <DevidedText>Or</DevidedText>
            </DividedContainer>
            <SocialMediaContainer> 
              <Icon className='fa-brands fa-google'></Icon>
              <Icon className='fa-brands fa-github'></Icon>
              <Icon className='fa-brands fa-twitter'></Icon>
            </SocialMediaContainer>
        </AuthFormContainer>
      </AuthBody>
    </AuthContainer>
  );
};

export default SignUp;
