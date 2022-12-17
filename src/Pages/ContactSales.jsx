import {
  Container,
  Box,
  Text,
  FormControl,
  Input,
  Textarea,
  Grid,
} from "@chakra-ui/react";

export default function contactSales() {
  return (
    <Container bg="#333333" maxW="full" mt={0} pt={"150px"} pb={10}>
      <Text
        color={"white"}
        fontSize={["3xl", "3xl", "4xl", "5xl", "6xl", "6xl"]}
        fontWeight="bold"
        pb={12}
      >
        Explore how Airtable can work for you.
      </Text>

      <Box
        bgColor={"white"}
        width={["full", "full", "lg", "xl", "xl"]}
        m={"auto"}
        p={4}
        borderRadius={"10px"}
      >
        <Box
          fontSize={"sm"}
          display="flex"
          justifyContent={"flex-end"}
          py={"8"}
        >
          <Text as={"span"}>Looking for Help? </Text>
          <Text color={"blue.600"} as={"span"}>
            Message Support
          </Text>
        </Box>

        <Text py={8}>Ready to chat with sales</Text>

        {/* <VStack p={6} border="5px solid red" boxSizing="border-box"> */}
        <form>
          <Grid gridGap="16px">
            <FormControl>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Working email address"
                required
                bgColor={"#F2F2F2"}
              />
            </FormControl>
            <FormControl>
              <Input
                id="name"
                placeholder="Full name"
                name="name"
                required
                bgColor={"#F2F2F2"}
              />
            </FormControl>
            <FormControl>
              <Input
                id="number"
                type="number"
                name="number"
                placeholder="Phone number"
                required
                bgColor={"#F2F2F2"}
              />
            </FormControl>
            <FormControl>
              <Input
                id="company"
                type="text"
                name="company"
                placeholder="Company name"
                required
                bgColor={"#F2F2F2"}
              />
            </FormControl>
            <FormControl>
              <Input
                id="job title"
                name="department"
                type="text"
                placeholder="Job title or department"
                required
                bgColor={"#F2F2F2"}
              />
            </FormControl>
            <FormControl>
              <Textarea bgColor={"#F2F2F2"} placeholder="Enter message" />
            </FormControl>
            <Input
              type="submit"
              value={"Submit"}
              required
              bgColor={"blackAlpha.700"}
              color="white"
              fontWeight={"500"}
            />
          </Grid>
        </form>
        <Text fontSize={"xs"}>By clicking Next, you acknowledge that your data will be handled in accordance With Airtable's Privacy Policy, and you
authorize Airtable to send you updates about Airtable products, services, and events.</Text>
        {/* </VStack> */}
      </Box>
    </Container>
  );
}
