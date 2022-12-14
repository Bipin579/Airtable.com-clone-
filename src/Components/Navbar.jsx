import React from "react";
import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../Utils/logo.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";
import SolutionsModal from "./SolutionsModal";
import EnterPrizeModal from "./EnterPrizeModal";
import ResourceModal from "./ResourceModal";
import NavAlert from "../Components/NavAlert";

const Navbar = () => {
  return (
    <Box overflow={"hidden"} pos={"fixed"} width="100%" zIndex={10} >
      <NavAlert/>
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
            <Modal buttonN={"Product"} value={<ProductModal />} />
          </Box>
          <Box>
            <Modal buttonN={"Solutions"} value={<SolutionsModal />} />
          </Box>
          <Box fontWeight={"600"}>
            <Link to={"/pricing"}>Prcing</Link>
          </Box>
          <Box>
            <Modal buttonN={"Enterprize"} value={<EnterPrizeModal />} />
          </Box>
          <Box>
            <Modal buttonN={"Resources"} value={<ResourceModal />} />
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
          <Box>
            <Button
              bgColor={"#0768F8"}
              color="white"
              fontWeight={"bold"}
              size="sm"
              variant={"solid"}
              _hover={{ bg: "#3944a8" }}
            >
              Sign up for free
            </Button>
          </Box>
          <Box>
            <Button>Sign in</Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
