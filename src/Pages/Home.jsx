import { Box, Text } from "@chakra-ui/react";
import React from "react";
import GetStarted from "../Components/GetStarted";
import SplitVideo from "../Components/AllVideos/SplitVideo";

const Home = () => {
  return (
    <Box maxW={"1300px"} pt={135} m="auto" >
      <GetStarted />
      {/* below hero section header */}
      <Box pb={8}>
        <Box maxW={"630px"} m="auto" textAlign={"center"}>
          <Text fontSize={["5xl", "5xl", "5xl", "5xl", "6xl", "6xl"]} fontWeight="bold" color={"blackAlpha.700"}>
            Create solutions that mirror your business
          </Text>
          <Text fontSize={"2xl"} fontWeight={"600"} color="blackAlpha.700">
            Move work forward faster with no-code apps that perfectly match your
            teamis agility and scale.
          </Text>
        </Box>
      </Box>
      {/* end of below hero section header */}
      <SplitVideo/>
    </Box>
  );
};

export default Home;
