import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useMediaQuery,
  Grid,
  Image,
  TabPanel,
  TabPanels,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";

export default function SplitVideo() {
  return (
    <Container maxW={"1300px"} p={0}>
      {/* split video 1  */}
      {/* using other box for maitaining color  */}

      <Box bgColor="#FAF2F4" pl={10} pr={10}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text as={"span"}>Unite every,</Text>
              <br />
              <Text as={"span"}>stream of work.</Text>
            </Heading>
            <Text color={"gray.500"}>
              Unite every stream of work Create a single source of truth that's
              tailored precisely to how your teams work. Include everything you
              need, nothing you don't.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                fontWeight={"500"}
                color={"blue"}
                bg="none"
                textAlign={"left"}
                _hover={{ color: "darkblue" }}
              >
                Explore the product
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              boxShadow={"md"}
              overflow={"hidden"}
              width="100%"
            >
              <video muted autoPlay preload="auto" playsInline loop>
                <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Flex>
        </Stack>
      </Box>

      {/* reverse video 2 */}
      <Box
        bgColor="#FAF2F4"
        pl={10}
        pr={10}
        pt={[0, 0, 0, 0, 0, 20]}
        display="flex"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
        ]}
        columnGap={10}
        pb={8}
      >
        <Box width={["full", "full", "full", "full", "50%", "50%"]}>
          <Box minHeight={100} boxShadow={"md"}>
            <video muted autoPlay preload="auto" playsInline loop>
              <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_03_TurnInformation_FINAL.mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>

        <Box width={["full", "full", "full", "full", "50%", "50%"]}>
          <Button bgColor={"purple"} color="white" rounded={"3xl"} mt={10}>
            New
          </Button>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"}>Interface with</Text>
            <br />
            <Text as={"span"}>work in a new</Text>
            <br />
            <Text as={"span"}>way.</Text>
          </Heading>
          <Text color={"gray.500"} mt={10}>
            Unite every stream of work Create a single source of truth that's
            tailored precisely to how your teams work. Include everything you
            need, nothing you don't.
          </Text>
          <Button
            fontWeight={"500"}
            color={"blue"}
            bg="none"
            textAlign={"left"}
            _hover={{ color: "darkblue" }}
            fontSize={{ base: "md", sm: "sm", md: "md" }}
          >
            Learn more about interface
          </Button>
        </Box>
      </Box>

      {/* split video 3 */}

      <Box pt={20} pb={50} bgColor="#FAF2F4" pl={10} pr={10}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={["column", "column", "column", "row", "row", "row"]}
          gap={10}
        >
          <Box>
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              maxW="sm"
            >
              Bring all your data together
            </Text>
          </Box>
          <Box maxW={"md"}>
            <Text fontSize={"xl"}>
              All your information. Always up to date. At your fingertips. Keep
              everything in sync across your organization.
            </Text>
            <Button
              fontWeight={"500"}
              color={"blue"}
              bg="none"
              textAlign={"left"}
              _hover={{ color: "darkblue" }}
              mt={4}
            >
              Learn about Sync
            </Button>
          </Box>
        </Box>
        <Box>
          <Image
            pt={8}
            src="https://static.airtable.com/images/homescreen/homepage-sync.jpg"
          />
        </Box>
      </Box>

      {/* split video 4  */}
      <Box
        display="flex"
        bgColor={"#FBFBFC"}
        paddingTop={20}
        pl={10}
        pr={10}
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
          "row",
        ]}
        gap={10}
      >
        <Box
          width={["full", "full", "full", "full", "40%", "40%"]}
          display="flex"
          alignItems={"center"}
        >
          <Box>
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color={"blackAlpha.700"}
            >
              Get Started
            </Text>
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color={"blackAlpha.700"}
            >
              quicky
            </Text>
            <Text fontSize={"xl"} pt={2}>
              All your information. Always up to date. At your fingertips. Keep
              everything in sync across your organization.
            </Text>
          </Box>
        </Box>
        <Box width={["full", "full", "full", "full", "60%", "60%"]}>
          <Tabs>
            <TabList fontWeight={"bold"} color={"blackAlpha.600"}>
              <Tab>See Value fast</Tab>
              <Tab>Gain Perspective</Tab>
              <Tab>Use templates</Tab>
            </TabList>
            <TabPanels boxShadow={"md"}>
              <TabPanel>
                <video muted autoPlay preload="auto" playsInline loop>
                  <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_SeeValueFast_FINAL.mp4" />
                  Your browser does not support the video tag.
                </video>
              </TabPanel>
              <TabPanel>
                <video muted autoPlay preload="auto" playsInline loop>
                  <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_GainPerspective_FINAL.mp4" />
                  Your browser does not support the video tag.
                </video>
              </TabPanel>
              <TabPanel>
                <video muted autoPlay preload="auto" playsInline loop>
                  <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_Templates_FINAL.mp4" />
                  Your browser does not support the video tag.
                </video>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      {/* split video 5  */}
      <Box
        display="flex"
        bgColor={"#FBFBFC"}
        paddingTop={20}
        pl={10}
        pr={10}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        gap={10}
        pb={"100px"}
      >
        <Box width={["full", "full", "full", "full", "60%", "60%"]}>
          <Tabs>
            <TabList fontWeight={"bold"} color={"blackAlpha.600"}>
              <Tab>Expant toolkits</Tab>
              <Tab>Develop solutions</Tab>
              <Tab>Use Get Expert support</Tab>
            </TabList>
            <TabPanels boxShadow={"md"}>
              <TabPanel>
                <Image src="https://static.airtable.com/images/homescreen/homepage-apps-dashboard.jpg" />
              </TabPanel>
              <TabPanel>
                <Image src="https://static.airtable.com/images/homescreen/homepage-run-code.jpg" />
              </TabPanel>
              <TabPanel>
                <Image src="https://static.airtable.com/images/homescreen/homepage-getsupport.jpg" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          width={["full", "full", "full", "full", "40%", "40%"]}
          display="flex"
          alignItems={"center"}
        >
          <Box>
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color={"blackAlpha.700"}
            >
              Tansform how
            </Text>
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color={"blackAlpha.700"}
            >
              works at
            </Text>
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color={"blackAlpha.700"}
            >
              scale
            </Text>
            <Text fontSize={"xl"} pt={2}>
              Discover deep integrations, advanced extensibility, expert
              support-everything your organization needs to reach new heights.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* customer stories section  */}

      <Box pl={10} pr={10} bgColor="#FAF5E8" pb={"80px"} pt="80px">
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          m={"auto"}
          flexDirection={["column", "column", "row", "row", "row", "row"]}
        >
          <Box
            width={["full", "full", "full", "sm", "sm", "sm"]}
            display={["flex", "flex", "block", "block", "block", "block"]}
          >
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              Trusted by
            </Text>{" "}
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              teams from
            </Text>{" "}
            <Text
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              all industries
            </Text>
          </Box>
          <Box
            width={["full", "full", "full", "sm", "sm", "sm"]}
            display={"flex"}
            justifyContent={["left", "left", "center", "center", "center"]}
          >
            <Button
              fontWeight={"500"}
              color={"blue"}
              bg="none"
              textAlign={"left"}
              _hover={{ color: "darkblue" }}
              mt={4}
              fontSize="xl"
              alignSelf={"flex-end"}
            >
              Learn about Sync
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          m={"auto"}
          mt={14}
          flexDirection={["column", "column", "row", "row", "row", "row"]}
        >
          <Box bgColor={"white"} width={["100%", "100%", "50%", "45%", "40%"]}>
            <Image
              objectFit={"fill"}
              src="https://static.airtable.com/images/homescreen/homepage-bakerhughes-portrait.jpg"
            />
          </Box>
          <Box
            width={["100%", "100%", "50%", "45%", "40%"]}
            bgColor="white"
            p={10}
            boxShadow="md"
            fontWeight="600"
            fontSize={"xl"}
          >
            <Text pb={4}>Baker Huges</Text>
            <Text fontSize={{ base: "md", md: "xl", xl: "2xl" }}>
              "A business transformationis really just a series of smaller
              changes rolling out one after the other. It's about getting the
              right information to people when they need it. What started as an
              Airtable calendar very quickly became the solution that we use to
              manage everything."
            </Text>
            <Text mt={4} fontWeight="700">
              Stephanie Hartgrove
            </Text>
            <Text fontWeight={"500"}>
              VP of Global Communications, Baker Hughes
            </Text>
            <Button
              fontWeight={"500"}
              color={"blue"}
              bg="none"
              textAlign={"left"}
              _hover={{ color: "darkblue" }}
              mt={5}
              fontSize="xl"
              alignSelf={"flex-end"}
            >
              Watch Video
            </Button>
          </Box>
        </Box>
      </Box>

      {/* above footer join us  */}
      <Box pl={10} pr={10} pt={24} textAlign="center" pb={10}>
        <Text lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl", xl: "5xl" }} fontWeight="bold" maxW="xl" m="auto" >
          300,000+ innovative companies use Airtable every day. Join them.
        </Text>
        <Button
              bgColor={"#0768F8"}
              color="white"
              fontWeight={"bold"}
              size="md"
              variant={"solid"}
          _hover={{ bg: "#3944a8" }}
          mt={7}
          mb={3}
            >
              Sign up for free
        </Button>
        <Text>No credit card needed</Text>

      </Box>
    </Container>
  );
}
