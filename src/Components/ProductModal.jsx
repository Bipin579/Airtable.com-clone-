import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons"
import {Link} from "react-router-dom"

const ProductModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        size={"sm"}
        ref={btnRef}
        variant="ghost"
        onClick={onOpen}
        bgColor={"none"}
      >
        Product
        <ChevronRightIcon/>
      </Button>

      <Drawer
        bgColor={"red.100"}
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay marginTop="130px" />
        <DrawerContent
          height={"82%"}
          marginTop="130px"
          width={["full", "full", "xl", "xl", "xl", "xl"]}
        >
          <DrawerCloseButton />
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            rowGap={6}
            p={10}
          >
            <Box>
              <Text as={"h1"} fontWeight="bold" pb={1.5}>
                <Link to={"/product"}>Overview</Link> 
              </Text>
              <Text>Welcome to Stata! Here's the basics</Text>
            </Box>
            <Box>
              <Text as={"h1"} fontWeight="bold" pb={1.5}>
                <Link to={"/integration"}>Integrations</Link>
              </Text>
              <Text>Bring Your favourite tools into Airtable</Text>
            </Box>
            <Box>
              <Text as={"h1"} fontWeight="bold" pb={1.5}>
                Enterprise Overview
              </Text>
              <Text>
                See how Airtable scales for large and complex organizations
              </Text>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProductModal;
