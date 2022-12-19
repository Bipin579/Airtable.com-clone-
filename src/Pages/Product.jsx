import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Product = () => {
  return (
    // hero section
    <Box maxW={"1300px"} pt={"120px"}>
      <Box
        display="flex"
        bgColor={"#EBF7FC"}
        paddingTop={20}
        pl={10}
        pr={10}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        gap={10}
      >
        <Box
          width={["full", "full", "full", "full", "40%", "40%"]}
          display="flex"
          // alignItems={"center"}
        >
          <Box>
            <Text
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
              color={"blackAlpha.800"}
            >
              Your platform for building connected apps
            </Text>
            <Text fontSize={"xl"} pt={4} color="#0076A8" fontWeight={"500"}>
              All your information. Always up to date. At your fingertips. Keep
              everything in sync across your organization.
            </Text>
            <Button
              bgColor={"#0768F8"}
              color="white"
              fontWeight={"bold"}
              size="lg"
              variant={"solid"}
              _hover={{ bg: "#3944a8" }}
              my={3}
            >
              Sign up for free
            </Button>
            <Text fontWeight={"400"} fontSize={"lg"}>
              or Contact Sales
            </Text>
          </Box>
        </Box>
        <Box width={["full", "full", "full", "full", "60%", "60%"]}>
          <Image src="https://images.ctfassets.net/wl95ljfippl8/7BVPICB7N2Ks0WvnXoCGRn/4a853110569f558185722c55cfdc1829/Tier1_WebHero_3024x2342.png?w=1920" />
        </Box>
      </Box>

      {/* text header  */}
      <Box
        display="flex"
        bgColor={"white"}
        paddingTop={20}
        pl={10}
        pr={10}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        gap={10}
        justifyContent="center"
      >
        <Box
          width={["full", "full", "full", "full", "40%", "40%"]}
          display="flex"
          // alignItems={"center"}
        >
          <Box>
            <Text
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
              color={"blackAlpha.600"}
            >
              Features
            </Text>
            <Text
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              color={"blackAlpha.700"}
              pt={4}
            >
              Unite your work flows.
            </Text>
          </Box>
        </Box>
        <Box
          width={["full", "full", "full", "full", "40%", "40%"]}
          display={"flex"}
          alignItems="center"
        >
          <Text
            fontSize={{ base: "md", sm: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            color="blackAlpha.600"
          >
            End silos with a unique platform that connects every part of your
            work.
          </Text>
        </Box>
      </Box>

      {/* 3 video with options  */}
      <Box
        display="flex"
        paddingTop={20}
        pl={10}
        pr={10}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        gap={10}
      >
        <Box
          width={["full", "full", "full", "full", "40%", "40%"]}
          display="flex"
          py={4}
          alignItems={"center"}
        >
          <Accordion allowToggle width="full">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    py={4}
                    fontWeight="600"
                  >
                    Turn your data into a central source of truth
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Sync real-time data from anywhere, automatically. Teams can
                weave it into their workflows, confident it's always up to date.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    py={4}
                    fontWeight="600"
                  >
                    Create different views of information
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Pre-built views let you choose how information is shown so it's
                more easily understood without disturbing the underlying data.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    py={4}
                    fontWeight="600"
                  >
                    Accelerate work with automations
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Reduce manual work with automations. They help work move
                seamlessly across multiple teams, workflows, or tools
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    py={4}
                    fontWeight="600"
                  >
                    Build and share custom interfaces
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Turn your data into beautiful, actionable interfaces that you
                can customize to fit different workflows and audiences.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
          width={["full", "full", "full", "full", "60%", "60%"]}
          bgColor={"#EBF7FC"}
          p={10}
          borderRadius="20px"
        >
          <video
            muted
            autoPlay
            preload="auto"
            playsInline
            loop
            borderRadius="20px"
            maxH={"200px"}
          >
            <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_Templates_FINAL.mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>

      {/* FAQ section  */}

      <Box py={10}>
        <Box
          m={"auto"}
          maxW={"900px"}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "6xl" }}
          fontWeight={"bold"}
          mb={5}
        >
          <Text lineHeight={1}>You have questions We have answers.</Text>
        </Box>

        <Accordion allowMultiple maxW={"900px"} m={"auto"}>
          <AccordionItem
            borderBottom={"1px solid black"}
            p={2}
            borderRadius={"10px"}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"} fontWeight="bold">
                  What is a connected apps platform?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A connected apps platform is a single platform that allows anyone
              in an organization to use shared data to build and customize apps.
              You can learn more about the connected apps platform here.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            borderBottom={"1px solid black"}
            p={2}
            borderRadius={"10px"}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"} fontWeight="bold">
                  What is Airtable used for?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Airtable is used for Marketing, Product Operations, and more. But
              its flexibility means it can be used for nearly anything, from
              tracking cattle to planning an event to tracking sales leads.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            borderBottom={"1px solid black"}
            p={2}
            borderRadius={"10px"}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"} fontWeight="bold">
                  Why use Airtable vs. spreadsheets?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Spreadsheets evolved from paper-based account ledgers, while
              Airtable was built from the start as a relational database. So
              while spreadsheets are fine for tracking information, Airtable
              makes your data actionable. In Airtable you can sync, structure
              and store data however you need to, to support infinite use cases.
              In addition, data is synced in real time. So if a data point
              changes, that change is automatically synced across every workflow
              and every place that data appears, eliminating the need to
              manually update information. You can learn more about databases
              vs. spreadsheets here
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            borderBottom={"1px solid black"}
            p={2}
            borderRadius={"10px"}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"} fontWeight="bold">
                  Does Airtable use SQL?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Although Airtable is built as a relational database, you cannot
              directly query an Airtable table. However, you can customize a
              view in Airtable to allow for SQL queries. In addition, there are
              ways to query your Airtable base with SQL from right inside
              Airtable.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            borderBottom={"1px solid black"}
            p={2}
            borderRadius={"10px"}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"} fontWeight="bold">
                  Is Airtable a CRM?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, Airtable can be used as a Customer Relationship Management
              (CRM) tool. There's even a pre-built CRM template you can use to
              get started quickly.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            borderBottom={"1px solid black"}
            p={2}
            borderRadius={"10px"}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"} fontWeight="bold">
                  How much does Airtable cost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Airtable has free, paid, and Enterprise plans available. You can
              learn more on our pricing page.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Product;
