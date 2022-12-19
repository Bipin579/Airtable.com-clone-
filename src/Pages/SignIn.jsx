import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
  Center,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import {AllContext} from "../Context/AllContext"

import app from "../firebase/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";


const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { setIsAuth, isAuth } = useContext(AllContext);
  const userSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((val) => {
        toast({
          title: "Successfully Logged In.",
          description: `Welcome ${email}`,
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setPassword("");
        setEmail("");
        setIsAuth(true)
        
      })
      .catch((err) => {
        toast({
          title: `${err.message}`,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 3000,
        });
        setPassword("");
        setEmail("");
      });
    
  };

  const signGoogle = () => {
    signInWithPopup(auth, googleAuth)
      .then((val) => {
        toast({
          title: "SuccessFully Logged In.",
          description: `Welcome to Stata`,
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setPassword("");
        setEmail("");
        
        setIsAuth(true)
        
      })
      .catch((err) => {
        toast({
          title: `${err.message}`,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 3000,
        });
        setPassword("");
        setEmail("");
      });
  };

  if (isAuth) {
    return (
      <>
        <Navigate to={"/"} />
      </>
    )
  }

  return (
    <Flex
      pt={"150px"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"gray.50"}
      maxW="1300px"
      m="auto"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={ "gray.50"}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={userSignin}
              >
                Sign in
              </Button>
              <Box display={"flex"} justifyContent="center">
                <Text as={"span"} textAlign={"center"}>
                  Dont have Account ?{" "}
                </Text>
                <Text color="blue" fontWeight="600" as={"span"}>
                  <Link to={"/signup"}>Sign Up</Link>
                </Text>
              </Box>
              <Button
                bgColor={"black"}
                color="white"
                borderRadius="none"
                bg={"back"}
                _hover={{ bg: "grey", color: "white" }}
                onClick={signGoogle}
                w={"full"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SignIn;
