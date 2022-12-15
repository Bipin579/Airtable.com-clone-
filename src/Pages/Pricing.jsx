import {
  chakra,
  Text,
  Container,
  useColorModeValue,
  Box,
  Spacer,
  Button,
  List,
  ListItem,
  ListIcon,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  StatHelpText,
  StatLabel,
  Stat,
  StatGroup,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { CheckCircleIcon } from "@chakra-ui/icons";

const Pricing = () => {
  return (
    <Container maxW={"1300px"} pt={150} mb={20}>
      <Box
        textAlign={"center"}
        pt={4}
        pb={4}
        bgGradient="linear-gradient(90deg, rgba(10,45,223,1) 38%, rgba(194,70,252,1) 94%)"
        fontSize={"xl"}
        color={"white"}
        fontWeight="bold"
        m={"auto"}
      >
        Sign up today and try the Pro plan for free
      </Box>
      <chakra.h1 fontSize="4xl" fontWeight="bold" textAlign="center" mb={5}>
        Choose the perfect plan
        <Spacer />
        for your team's needs
      </chakra.h1>
      <PricingCard />

      <Text mt={3} color={"blackAlpha.600"}>
        * Service levels determined based on spend; customer base trainings and
        base build services available to qualified customers as set forth on an
        applicable order form. Services expire if they are not utilized within
        the contract term.
      </Text>

      <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"bold"} m={6}>
        Have additional questions?
      </Text>
      <StatGroup
        pb={6}
        maxW={"800px"}
        m={"auto"}
        textAlign={"center"}
        display={["block", "block", "flex", "flex", "flex"]}
      >
        <Stat>
          <StatLabel p={2} color={"blackAlpha.500"}>
            BILLING / PRICING
          </StatLabel>
          <StatHelpText fontSize={"xl"} fontWeight={"bold"} color={"#558BF9"}>
            Billing FAQ
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel p={2} color={"blackAlpha.500"}>
            SPECIAL PLANS FOR
          </StatLabel>

          <StatHelpText fontSize={"xl"} fontWeight={"bold"} color={"#558BF9"}>
            Nonprofits or Education
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel p={2} color={"blackAlpha.500"}>
            ENTERPRISE PLANS
          </StatLabel>

          <StatHelpText fontSize={"xl"} fontWeight={"bold"} color={"#558BF9"}>
            Contact sales
          </StatHelpText>
        </Stat>
      </StatGroup>

      <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"bold"} m={6}>
        Frequently asked questions?
      </Text>
      <Accordion allowMultiple maxW={"800px"} m={"auto"}>
        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                How does Airtable's pricing work?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Airtable plans are charged per seat. If you are on Airtable's Free
            plan, you can add viewers and commenters to your workspace for free.
            f you are on a paid Airtable plan, you will be charged for all
            collaborators who have edit or comment permissions to at least one
            base in the workspace. No charges will apply for read-only
            collaborators or people submitting forms. Charges are prorated:
            collaborators with edit permissions added partway through the month
            will only be charged for the days they were collaborators
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                How does Airtable's Enterprise pricing work?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Upgrades to Airtable Enterprise apply per account within an
            organization. You will be charged for all collaborators with edit,
            comment, or read access to at least one base in your organization.
            An organization has the ability to create unlimited workspaces and
            bases as part of the enterprise plan. Charges are prorated:
            collaborators with edit, comment, or read permissions added partway
            through the billing cycle will only be charged for the months they
            were collaborators. For more information on our Enterprise plans,
            contact sales.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Is Airtable free to use?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Airtable has multiple packages to help teams of all sizes
            orchestrate their work. Our Free plan is available to teams for no
            charge and provides the key building blocks to help you build your
            database. The Free plan is free forever and is formulated for small
            teams or those with lightweight needs. Our paid plans offer
            additional power and scale for teams as they grow and their needs
            get more complex.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                How much does Airtable cost?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our Free plan is available at no cost for teams just getting
            started. For teams wholike the features of our Free plan but need
            more storage, our Plus plan is available for S10/user. Our Pro plan
            costs $20/user and includes the customization and team management
            features that fast moving teams and organizations need. Our
            Enterprise plan pricing is custom, based on the organization's needs
            and scale with Airtable. To learn more about our Enterprise pricing,
            contact sales.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                What are my payment options?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            All payments are made via credit card for Plus and Pro workspaces.
            For Enterprise accounts, we can issue an annual invoice with payment
            via PO and/or ACH, wire, or check. Please contact sales for more
            information.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                What happens when I hit my usage limits?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            If you reach our record or attachment limits, you'll still be able
            to use your bases. We'll let you know about the overage, and give
            you a grace period to find a plan that fits your needs!
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                What's an Airtable base?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A base is a collection of related tables, often reflectinga single
            project, process, or workflow that you collaborate on with your
            team. For example, you could make a base to organize your sales
            process, with tables for sales leads, companies, and deal
            opportunities. Each table contains records (similar to rows in a
            spreadsheet), which represent the individual objects, ideas, or
            people that you're tracking. You're free to create as many bases as
            you'd like on any of our plans.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                What is revision history?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Airtable provides powerful ways to go back in time with record-level
            revision history and base snapshots. View a living history of all
            the changes that have been made to a single record and jump back in
            time and restore your base to a previous state. We provide a limited
            history for free plans, with extended histories for our premium
            plans. When you upgrade and extend your history, all future
            revisions will be tracked using the upgraded setting.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                What are the per-base record and attachment limits?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            While we dont limit the number of bases you can create, we do limit
            records and attachment space per base. On the Free plan, we limit
            the total number of records you can have across all tables in a
            base. We also limit the total amount of attachment space you can use
            in a base. You can increase these limits by upgrading to one of our
            premium plans.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                What are sync integrations?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Sync integrations (previously known as external source sync) let you
            import data from external sources like Google Calendar, Zendesk, and
            Box into an Airtable base. Some external sources like Salesforce and
            lira count as premium sync integrations and are only available as
            part of the Pro and Enterprise plans.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

const PricingCard = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={6}
      justifyContent={"center"}
    >
      <GridItem
        p={5}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="xl"
        margin="0 auto"
        width={"100%"}
      >
        <Text
          textAlign={"left"}
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"RGBA(0, 0, 0, 0.64)"}
        >
          Free
        </Text>
        <Text
          fontWeight={"bold"}
          textAlign={"left"}
          color={"RGBA(0, 0, 0, 0.84)"}
        >
          For individuals or very small{" "}
          <Spacer>teams just getting started</Spacer>
          with Airtable
        </Text>

        <Text
          textAlign={"left"}
          fontSize={"5xl"}
          fontWeight={"bold"}
          pt={20}
          pb={18}
        >
          Free
        </Text>

        <Button size={"lg"} border={"1px solid black"} borderRadius={20}>
          Sign Up
        </Button>

        <Text textAlign={"left"} pt={15}>
          Free includes :{" "}
        </Text>

        <List spacing={1} textAlign={"left"}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Unlimited bases
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Up to 5 creators or editors
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Unlimited commenter & read
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Interface Designer
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />l extension per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />I sync integration
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            1,200 records per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            2GB of attachments per base
          </ListItem>
        </List>
      </GridItem>

      <GridItem
        width={"100%"}
        p={5}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="xl"
        margin="0 auto"
        bgColor={"#FFEAB6"}
      >
        <Text
          textAlign={"left"}
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"RGBA(0, 0, 0, 0.64)"}
        >
          Plus
        </Text>
        <Text
          fontWeight={"bold"}
          textAlign={"left"}
          color={"RGBA(0, 0, 0, 0.84)"}
        >
          For teams looking to create
          <Spacer>connected apps to manage</Spacer>
          their own workflows
        </Text>

        <Text
          textAlign={"left"}
          fontSize={"5xl"}
          fontWeight={"bold"}
          pt={20}
          paddingBottom={18}
        >
          $10{" "}
          <Text fontSize={"sm"} as={"span"}>
            per seat /monthly
          </Text>
        </Text>

        <Button size="lg" border={"1px solid black"} borderRadius={20}>
          Try it for Button
        </Button>

        <Text textAlign={"left"} pt={15}>
          Everything in free plus :{" "}
        </Text>

        <List spacing={1} textAlign={"left"}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Unlimited bases
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Up to 5 creators or editors
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Unlimited commenter & read
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Interface Designer
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />l extension per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />I sync integration
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            1,200 records per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            2GB of attachments per base
          </ListItem>
        </List>
      </GridItem>

      <GridItem
        width={"100%"}
        p={5}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="xl"
        margin="0 auto"
        bgColor={"#D0F0FD"}
      >
        <Text
          textAlign={"left"}
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"RGBA(0, 0, 0, 0.64)"}
        >
          Free
        </Text>
        <Text
          fontWeight={"bold"}
          textAlign={"left"}
          color={"RGBA(0, 0, 0, 0.84)"}
        >
          For individuals or very small{" "}
          <Spacer>teams just getting started</Spacer>
          with Airtable
        </Text>

        <Text
          textAlign={"left"}
          fontSize={"5xl"}
          fontWeight={"bold"}
          pt={20}
          paddingBottom={18}
        >
          $20{" "}
          <Text fontSize={"sm"} as={"span"}>
            per seat /monthly
          </Text>
        </Text>

        <Button size={"lg"} bgColor={"blue"} color="white" borderRadius={20}>
          Try it for free
        </Button>

        <Text pt={15} textAlign={"left"}>
          Everything in Plus, plus :{" "}
        </Text>

        <List spacing={1} textAlign={"left"}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Unlimited bases
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Up to 5 creators or editors
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Unlimited commenter & read
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            Interface Designer
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />l extension per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />I sync integration
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            1,200 records per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="black" />
            2GB of attachments per base
          </ListItem>
        </List>
      </GridItem>

      <GridItem
        width={"100%"}
        p={5}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="xl"
        margin="0 auto"
        bgColor={"black"}
        color="white"
      >
        <Text
          textAlign={"left"}
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"white"}
        >
          Free
        </Text>
        <Text fontWeight={"bold"} textAlign={"left"} color={"white"}>
          For individuals or very small{" "}
          <Spacer>teams just getting started</Spacer>
          with Airtable
        </Text>

        <Text
          textAlign={"left"}
          fontSize={"5xl"}
          fontWeight={"bold"}
          pt={20}
          pb={18}
        >
          Exlusive
        </Text>

        <Button
          color={"black"}
          size={"lg"}
          border={"1px solid black"}
          borderRadius={20}
        >
          Contact Sales
        </Button>

        <Text pt={18} textAlign={"left"}>
          Everything in Pro , plus :{" "}
        </Text>

        <List spacing={1} textAlign={"left"}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />
            Unlimited bases
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />
            Up to 5 creators or editors
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />
            Unlimited commenter & read
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />
            Interface Designer
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />l extension per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />I sync integration
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />
            1,200 records per base
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color="white" />
            2GB of attachments per base
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  );
};

export default Pricing;
