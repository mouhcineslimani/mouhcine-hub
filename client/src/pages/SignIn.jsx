import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInError } from '../redux/features/authSlice';
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

const SignIn = () => {
  const [signInUserData, setSignInUserData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, errors , isAuthenticated } = useSelector(state => state.auth);
  const location = useLocation();
  const messageError = location.state && location.state.message;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setSignInUserData({ ...signInUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signInUserData.email || !signInUserData.password) {
      dispatch(signInError({message : { message: 'Please fill in all fields' }}));
      return;
    }

    dispatch(signInStart());

    try {
      const data = await auth.signIn(signInUserData);
      if (data.success) {
        setTimeout(()=>{
          dispatch(signInSuccess(data));
          navigate('/dashboard');
        },1000);
      } else {
        dispatch(signInError(data.error));
      }
    } catch (error) {
      dispatch(signInError({ message: 'An error occurred while signing in' }));
    }
  };

  return (
    <AuthContainer>
      <AuthBody>
        <AuthImageContainer>
          <img src={Illustrations.LoginSvg} alt="Sign in for an account!" />
        </AuthImageContainer>
        <AuthFormContainer>
          <AuthTitle>Sign in</AuthTitle>
          {errors && <MessageText error={"error"}>{errors.message}</MessageText>}
          {messageError && <MessageText error={"error"}>{messageError}</MessageText>}
          <InputBox>
            <Icon className='fa fa-envelope'></Icon>
            <Input type="email" placeholder='Email...' name="email" onChange={handleChange} />
          </InputBox>
          <InputBox>
            <Icon className='fa fa-lock'></Icon>
            <Input type="password" placeholder='Password...' name="password" onChange={handleChange} />
          </InputBox>
          <InputBox>
            <Input type="submit" value={isLoading ? 'Signing in...' : 'Sign in'} width="100%" onClick={handleSubmit} disabled={isLoading} />
          </InputBox>
          <MessageContainer>
            <MessageText>Don't have an account?</MessageText>
            <GoToLink to={"/sign-up"}>Sign up</GoToLink>
          </MessageContainer>
          <DividedContainer>
            <Line />
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

export default SignIn;
