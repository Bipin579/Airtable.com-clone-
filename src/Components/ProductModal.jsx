import { Box,Text } from "@chakra-ui/react";
import React from "react";

const ProductModal = () => {
  return (
    <>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Overview
        </Text>
        <Text>Welcome to Stata! Here's the basics</Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Features
        </Text>
        <Text>Discover automation, views, reporting and more</Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Enterprise Overview
        </Text>
        <Text>See how Airtable scales for large and complex organizations</Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Marketplace
        </Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Download Apps
        </Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          What's new
        </Text>
      </Box>
    </>
  );
};

export default ProductModal;
