import React, { useContext, useState, useEffect } from 'react';
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
  Icon,
  Link,
} from '@chakra-ui/react';
import ErrorMessage from '../ui/ErrorMessage';
import { AuthContext } from './../contexts/AuthContext/AuthState';
import { Link as NavLink, Redirect } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, loadUser, token, error, user } = useContext(AuthContext);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    await login({ username, password });
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

  const handleDemo = () => {
    setUsername('demo');
    setPassword('123456');
  };

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
        <Box textAlign="center">
          <Heading size="md">Login</Heading>
        </Box>
        <Box mt={4} mb={1} textAlign="left">
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="test"
                size="lg"
                value={username}
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
                  value={password}
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
          <Text mt="20px" textAlign="center" fontSize="sm">
            Dont have an account?
            <br />
            <Link
              as={NavLink}
              to="/signup"
              _hover={{ textDecoration: 'underline' }}
            >
              signup here{' '}
            </Link>
            or{' '}
            <Link _hover={{ textDecoration: 'underline' }} onClick={handleDemo}>
              use demo
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
