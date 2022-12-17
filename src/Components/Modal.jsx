import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Image,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionButton,
  AccordionItem,
  Accordion,
  Text,
} from "@chakra-ui/react";
import hamburger from "../Utils/hamburger.png";
import { NavLink } from "react-router-dom";
function Modal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        size={["xs", "xs", "sm"]}
        ref={btnRef}
        variant="ghost"
        onClick={onOpen}
        bgColor={"none"}
      >
        <Image minW={"30px"} src={hamburger} />
      </Button>

      <Drawer
        bgColor={"red.100"}
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay marginTop="134px" />
        <DrawerContent
          height={"82%"}
          marginTop="134px"
          width={["full", "full", "xl", "xl", "xl", "xl"]}
        >
          <DrawerCloseButton />
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            rowGap={6}
            p={10}
          >
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton py={3}>
                    <Box as="span" flex="1" textAlign="left">
                      Products
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
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
                    <Text>
                      See how Airtable scales for large and complex
                      organizations
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
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton py={3}>
                    <Box as="span" flex="1" textAlign="left">
                      Solutions
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      By team
                    </Text>
                    <Text>
                      See how teams of all stripes and sizes use Airtable
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      By use case
                    </Text>
                    <Text>
                      Get inspired by use cases that'll make you fall in love
                      with <Text>Airtable</Text>{" "}
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Enterprise Overview
                    </Text>
                    <Text>
                      See how Airtable scales for large and complex
                      organizations
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
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton py={3}>
                    <Box as="span" flex="1" textAlign="left">
                      <NavLink
                        to={"/pricing"}
                        style={({ isActive }) =>
                          isActive ? { color: "blue" } : undefined
                        }
                      >
                        Pricing
                      </NavLink>
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton py={3}>
                    <Box as="span" flex="1" textAlign="left">
                      EnterPrize
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Enterprise Overview
                    </Text>
                    <Text>
                      See how Airtable scales for large and complex
                      organizations
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Enterprise Services
                    </Text>
                    <Text>
                      We offer professional services and support to help you get
                      the most <Text> from Airtable</Text>{" "}
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Enterprise Security
                    </Text>
                    <Text>
                      Learn about our data protection, admin tooling, and more
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Pricing
                    </Text>
                    <Text>
                      From small business to global enterprise, there's an
                      Airtable plan that's
                      <Text>just right for you.</Text>
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem >
                <h2>
                  <AccordionButton py={3}>
                    <Box as="span" flex="1" textAlign="left">
                      Resources
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Enterprise Overview
                    </Text>
                    <Text>
                      See how Airtable scales for large and complex
                      organizations
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Enterprise Services
                    </Text>
                    <Text>
                      We offer professional services and support to help you get
                      the most <Text> from Airtable</Text>{" "}
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Enterprise Security
                    </Text>
                    <Text>
                      Learn about our data protection, admin tooling, and more
                    </Text>
                  </Box>
                  <Box>
                    <Text as={"h1"} fontWeight="bold" pb={1.5}>
                      Pricing
                    </Text>
                    <Text>
                      From small business to global enterprise, there's an
                      Airtable plan that's
                      <Text>just right for you.</Text>
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Modal;
