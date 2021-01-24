import React, { useState, useContext, useEffect } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Text,
  InputGroup,
  InputRightElement,
  Link,
  Icon,
} from '@chakra-ui/react';
import ErrorMessage from '../ui/ErrorMessage';
import { Link as NavLink, Redirect } from 'react-router-dom';
import { AuthContext } from './../contexts/AuthContext/AuthState';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, loadUser, token, error, user } = useContext(AuthContext);

  const handleSubmit = async event => {
    event.preventDefault();
    if (confirmPassword !== password) {
      console.log('error');
    } else {
      console.log(username, password);
      setIsLoading(true);
      await register({ username, password });
    }
  };
  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, []);
  useEffect(() => {
    if (error) {
      setIsLoading(false);
      setShowPassword(false);
    }
  }, [error]);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  if (user) return <Redirect to="/" />;

  return (
    <Flex width="full" align="center" justifyContent="center" mt="80px">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box mt={4} mb={2} textAlign="left">
            <form onSubmit={handleSubmit}>
              {error && <ErrorMessage message={error} />}
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="username"
                  size="lg"
                  onChange={event => setUsername(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl isRequired mt={6}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="*******"
                    size="lg"
                    onChange={event => setPassword(event.currentTarget.value)}
                  />
                  <InputRightElement width="3rem">
                    <Button
                      h="1.5rem"
                      size="sm"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? (
                        <Icon name="view-off" />
                      ) : (
                        <Icon name="view" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl isRequired mt={6}>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="*******"
                    size="lg"
                    onChange={event =>
                      setConfirmPassword(event.currentTarget.value)
                    }
                  />
                  <InputRightElement width="3rem">
                    <Button
                      h="1.5rem"
                      size="sm"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? (
                        <Icon name="view-off" />
                      ) : (
                        <Icon name="view" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                variantColor="teal"
                variant="outline"
                type="submit"
                width="full"
                mt={4}
              >
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
            <Text mt="20px" mr="3px" fontSize="sm" textAlign="center">
              Already have an account?{' '}
              <Link
                as={NavLink}
                to="/login"
                _hover={{ textDecoration: 'underline' }}
              >
                login here
              </Link>
            </Text>
          </Box>
        </>
      </Box>
    </Flex>
  );
}
