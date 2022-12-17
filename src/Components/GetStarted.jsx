import { Box, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import colehaan from "../Utils/colehaan.png";
import medium from "../Utils/medium.png";
import expedia from "../Utils/expedia.png";
import netflix from "../Utils/netflix.png";
import time from "../Utils/time.png";
import shopify from "../Utils/shopify.png";
const GetStarted = () => {
  return (
    <Box maxW={"1300px"}>
      <Box
        pt={[0, 0, 0, 0, 0, 20]}
        pl={10}
        pr={10}
        bgColor={"#EBF7FC"}
        display="flex"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
          "row",
        ]}
        columnGap={10}
        pb={8}
      >
        <Box width={["auto", "auto", "auto", "50%", "50%", "50%"]}>
          <Text
            fontSize={["3xl", "4xl", "5xl", "6xl", "7xl", "7xl"]}
            fontWeight={"bold"}
            lineHeight={["40px", "50px", "60px", "60px", "80px", "80px"]}
            color="blackAlpha.800"
          >
            Connect everything.{" "}
          </Text>
          <Text
            fontSize={["3xl", "4xl", "5xl", "6xl", "7xl", "7xl"]}
            fontWeight={"bold"}
            lineHeight={["40px", "50px", "60px", "60px", "80px", "80px"]}
            mb={5}
            color="blackAlpha.800"
          >
            Acheive anything.{" "}
          </Text>
          <Text fontSize={"2xl"} fontWeight={"650"} color="blackAlpha.700">
            Accelerate work and unlock potential with powerful apps that connect
            your data, workflows and teams. This is how.
          </Text>
          <Button
            bgColor={"#0768F8"}
            color="white"
            fontWeight={"bold"}
            size="md"
            variant={"solid"}
            _hover={{ bg: "#3944a8" }}
            mt={5}
          >
            Sign up for free
          </Button>
        </Box>
        <Box width={["auto", "auto", "auto", "50%", "50%", "50%"]}>
          <video muted autoPlay preload="auto" playsInline loop width={"full"}>
            <source src="https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
      <Box
        display={"grid"}
        justifyContent={[
          "space-around",
          "space-around",
          "space-around",
          "space-around",
          "space-evenly",
          "space-evenly",
        ]}
        gridTemplateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(6, 1fr)",
          "repeat(6, 1fr)",
        ]}
        alignItems={"center"}
        bgColor={"#f0ebeb"}
      >
        <Image src={colehaan} maxW="150px" margin={"auto"} />
        <Image src={medium} maxW="180px" margin={"auto"} />
        <Image src={expedia} maxW="180px" margin={"auto"} />
        <Image src={netflix} maxW="130px" margin={"auto"} />
        <Image src={time} maxW="180px" margin={"auto"} />
        <Image src={shopify} maxW="140px" margin={"auto"} />
      </Box>
    </Box>
  );
};

export default GetStarted;
