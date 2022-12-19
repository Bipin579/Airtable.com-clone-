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
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AllContext } from "../Context/AllContext"

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { setIsAuth, isAuth } = useContext(AllContext);
  const [checkS, setCheckS] = useState(false);

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((val) => {
        toast({
          title: "Account created.",
          description: `Welcome ${email}`,
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setPassword("");
        setEmail("");
        setCheckS(true);
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
          title: "Account created.",
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
  if (checkS) {
    return <Navigate to={"/signin"}/>
  }
  if (isAuth) {
    return <Navigate to={"/"}/>
  }
  return (
    <Flex
      pt={"150px"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"gray.50" }
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={"white"}
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
                onClick={createUser}
              >
                Sign up
              </Button>
              <Box display={"flex"} justifyContent="center">
                <Text as={"span"} textAlign={"center"}>
                  Already have Account ?{" "}
                </Text>
                <Text color="blue" fontWeight="600" as={"span"}>
                  <Link to={"/signin"}>Sign In</Link>
                </Text>
              </Box>

              <Button
                bgColor={"black"}
                color="white"
                borderRadius="none"
                bg={"black"}
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

export default SignUp;
