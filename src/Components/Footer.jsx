import { Box, Heading, Flex, List, ListItem, Link, Text, Image } from '@chakra-ui/react';

const Footer = () => {

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
      maxW={"1300px"}
      pl={10}
      pr={10}
    >
      <Box
        maxW="1300"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex flexWrap="wrap" alignItems="start" justify="space-between">
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
            Popular Templates
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="Content Calendar" />
              <LinkItem text="Product Roadmap" />
              <LinkItem text="Inventory Tracking" />
              <LinkItem text="Marketing Campaign" />
              <LinkItem text="Tracking" />
              <LinkItem text="Event Planning" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
            Popular Extensions
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Miro" />
              <LinkItem text="Jira" />
              <LinkItem text="Clearbit" />
              <LinkItem text="Loom" />
              <LinkItem text="Formstack" />
              <LinkItem text="Chart" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
            Popular Solutions
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Marketing" />
              <LinkItem text="Product Operations" />
              <LinkItem text="Human Resources" />
              <LinkItem text="Sales" />
              <LinkItem text="Operations"  />
              <LinkItem text="Content Operations" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
            Learn More
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Terms" isTag={true } tagText={"Popular"} />
              <LinkItem text="Privacy" isTag={true } tagText={"New"} />
              <LinkItem text="Guides" />
              <LinkItem text="Article" />
              <LinkItem text="Community" />
              <LinkItem text="Support" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Company
            </Heading>
            <List lineHeight="2">
              <LinkItem text="About" />
              <LinkItem text="Careers" isTag={true } tagText={"New"} />
              <LinkItem text="Blog" />
              <LinkItem text="Status" />
              <LinkItem text="Newsroom" />
            </List>
          </Box>
        </Flex>
      </Box>
      <Flex px={10} justifyContent="space-between" flexDir={["column","column","column","row","row","row"]} gap={10} fontSize={"lg"} >
        <Box display={"flex"} justifyContent={"space-evenly"} width="md" m={"auto"} >
        <Text>Security</Text>
        <Text>API</Text>
        <Text>Sitemap</Text>
        <Text>Privacy</Text>
        <Text>Terms</Text>
        </Box>

        <Box  display={"flex"} justifyContent={"space-between"} width="xs" m={"auto"} >
          <Image maxW={"170px"} src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'/>
          <Image maxW={'150px'} src='https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0'/>
        </Box>
        
      </Flex>
    </Box>
  );
};



const LinkItem = ({ text, isTag = false, tagText }) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        href="#"
        color="blackAlpha.700"
        _hover={{ color: 'green.600' }}
        fontSize={"lg"}
      >
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="maroon"
          
          display="inline-flex"
          alignItems="center"
          color="#fff"
          height="1.5rem"
          borderRadius="0.25rem"
          p={1}
          ml={1}
          fontSize="1rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};

export default Footer;