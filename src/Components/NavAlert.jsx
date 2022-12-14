import { Box,Text } from "@chakra-ui/react";
import React from "react";

const NavAlert = () => {
  return (
    <Box textAlign={"center"} p={4} backgroundColor={"#f0f6ff"} fontSize={"sm"} color={"black.100"}>
      See how new Airtable features can improve your work in our latest webinar <Text as={"span"}  fontWeight={"bold"} color={"#4F85D6"} >View webinar</Text>
    </Box>
  );
};

export default NavAlert;
