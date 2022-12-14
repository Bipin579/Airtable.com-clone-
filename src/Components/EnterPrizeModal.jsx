import React from "react";
import { Box, Text } from "@chakra-ui/react";

const EnterPrizeModal = () => {
  return (
    <>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Enterprise Overview
        </Text>
        <Text>See how Airtable scales for large and complex organizations</Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Enterprise Services
        </Text>
        <Text>
          We offer professional services and support to help you get the most{" "}
          <Text> from Airtable</Text>{" "}
        </Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Enterprise Security
        </Text>
        <Text>Learn about our data protection, admin tooling, and more</Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
        Pricing
        </Text>
        <Text>From small business to global enterprise, there's an Airtable plan that's
            <Text>just right for you.</Text></Text>
      </Box>
    </>
  );
};

export default EnterPrizeModal;
