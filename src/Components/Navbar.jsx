import React, { useEffect, useState, useContext } from "react";
import { Box, Button, Flex, HStack, Image, useToast } from "@chakra-ui/react";
import logo from "../Utils/logo.png";
import { Link } from "react-router-dom";
import NavAlert from "../Components/NavAlert";
import ProductModal from "./ProductModal";
import SolutionsModal from "./SolutionsModal";
import EnterPrizeModal from "./EnterPrizeModal";
import ResourceModal from "./ResourceModal";
import { NavLink } from "react-router-dom";
import Modal from "../Components/Modal";
import { AllContext } from "../Context/AllContext";
import app from "../firebase/firebase";
import { signOut, getAuth } from "firebase/auth"

const auth = getAuth(app)

const Navbar = () => {
  const { isAuth,setIsAuth } = useContext(AllContext);
  let activeStyle = {
    color: "blue",
  };
  const toast = useToast();
  const logOut = () => {
    signOut(auth)
    .then((val) => {
      toast({
        title: "Logout",
        description: `Logout Successful`,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(val)
      setIsAuth(false);
    })
      .catch((err) => {
      console.log(err)
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        position: "top",
        duration: 3000,
      });
      
    });
  }
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimension <= 1019 ? (
    // Mobile view ********************************************
    <Box overflow={"hidden"} pos={"fixed"} width="100%" zIndex={10}>
      <NavAlert />
      <Flex
        maxW={"1300px"}
        m={"auto"}
        mb={4}
        display="flex"
        justifyContent={"space-between"}
        alignItems="Center"
        bg={"white"}
      >
        <HStack p={1} pl={2}>
          <Box p={1}>
            <Link to={"/"}>
              <Image minW={"30px"} src={logo} alt="Dan Abramov" w={170} />
            </Link>
          </Box>
        </HStack>

        <HStack p={1} pr={8}>
          <Box display={(windowDimension >= 750 ? "block" : "none") || (isAuth ? "none" : "block")}>
            <Button
              bgColor={"#0768F8"}
              color="white"
              fontWeight={"bold"}
              size="sm"
              variant={"solid"}
              _hover={{ bg: "#3944a8" }}
            >
              <Link to={"/signup"}>Sign up for free</Link>
            </Button>
          </Box>
          <Box>
            <Button size={["xs", "sm", "sm", "sm", "sm", "sm"]} display={isAuth ? "none" : "block"}>
              <Link to={"/signin"}>Sign in</Link>
            </Button>
          </Box>
          <Box display={isAuth?"block":"none"} size={["xs", "sm", "sm", "sm", "sm", "sm"]}>
            <Button onClick={logOut}>Logout</Button>
          </Box>
          <Box>
            <Modal />
          </Box>
        </HStack>
      </Flex>
    </Box>
  ) : (
    //  DeskTop View  *********************************************************************************
    <Box overflow={"hidden"} pos={"fixed"} width="100%" zIndex={10}>
      <NavAlert />
      <Flex
        maxW={"1300px"}
        m={"auto"}
        mb={4}
        display="flex"
        justifyContent={"space-between"}
        alignItems="Center"
        bg={"white"}
      >
        <HStack p={1} pl={2}>
          <Box p={1}>
            <Link to={"/"}>
              <Image src={logo} alt="Dan Abramov" w={170} />
            </Link>
          </Box>

          <Box p={1}>
            <ProductModal />
          </Box>

          <Box>
            <SolutionsModal />
          </Box>

          <Box fontWeight={"600"}>
            <NavLink
              to={"/pricing"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Pricing
            </NavLink>
          </Box>
          <Box>
            <EnterPrizeModal />
          </Box>
          <Box>
            <ResourceModal />
          </Box>
        </HStack>

        <HStack p={1} pr={8}>
          <Box>
            <Button
              size={"sm"}
              colorScheme="grey"
              variant="outline"
              border={"2px solid grey"}
            >
              <Link to={"/contactsales"}>Contact sales</Link>
            </Button>
          </Box>

          <Box display={isAuth ? "none" : "block"}>
            <Button
              bgColor={"#0768F8"}
              color="white"
              fontWeight={"bold"}
              size="sm"
              variant={"solid"}
              _hover={{ bg: "#3944a8" }}
            >
              <Link to={"/signup"}>Sign up for free</Link>
            </Button>
          </Box>
          <Box display={isAuth ? "none" : "block"}>
            <Button>
              <Link to={"/signin"}>Sign in</Link>
            </Button>
          </Box>
          <Box display={!isAuth?"none":"block"}>
            <Button onClick={logOut}>Logout</Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
