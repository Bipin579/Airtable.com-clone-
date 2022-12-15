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

const SolutionsModal = () => {
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
        Solutions
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
                By team
              </Text>
              <Text>See how teams of all stripes and sizes use Airtable</Text>
            </Box>
            <Box>
              <Text as={"h1"} fontWeight="bold" pb={1.5}>
                By use case
              </Text>
              <Text>
                Get inspired by use cases that'll make you fall in love with{" "}
                <Text>Airtable</Text>{" "}
              </Text>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SolutionsModal;
