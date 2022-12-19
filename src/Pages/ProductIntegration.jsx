import React, {  useState } from "react";
import {
  Box,
  Checkbox,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import gDrive from "../Utils/gDrive.png";
import salesForce from "../Utils/salesForce.png";
import zendex from "../Utils/zendex.png";

const data = [
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/2X83vZDmT8BXI02IpdT8Zn/621578e109a3733f769eff2605b365fe/Asana.png?w=3840",
    category: "project",
    name: "Asana",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/65R4M8x3GWV9DCnBwOO8HV/dcfe30ca9e88954dff4ed598400ea7df/Basecamp.png?w=3840",
    category: "project",
    name: "Basecamp",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/3X0uI4vSlnLrxOKa1paJX8/531f1f6b7df24fe0db0fae729317c697/Box.png?w=3840",
    category: "project",
    name: "Box",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/3X0uI4vSlnLrxOKa1paJX8/531f1f6b7df24fe0db0fae729317c697/Box.png?w=3840",
    category: "social",
    name: "Facebook",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/1r6xaCHFM7Ztmst1aE2Rir/e0a6a4057874c670902fe0ced2f13314/Instagram.png?w=1920",
    category: "social",
    name: "Instagram",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/29XwUBIWNTCYFUB1Lxek5v/f3771bafa04b80abccde2c54dc683a61/Linkedin.png?w=1920",
    category: "social",
    name: "Linkedin",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/3cJCqvoisJydxIwOeNQbRL/5e5d79444f6da39387f26770984a3102/Tumblr.png?w=1920",
    category: "social",
    name: "Tumblr",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/3XQpF5t1PrbMkn3eJhqsqU/f853d18e525655a17449fb329b487cd2/Email.png?w=1920",
    category: "communication",
    name: "Email",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/6oy8YobDyxX3pZmxVjJgwU/87d63eebe37b7a15aea827ef6605fd80/Gmail.png?w=1920",
    category: "communication",
    name: "Gmail",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/2LOTN3gqTZjccbQ7A5wwUK/70863e82671188dbacbd5f5033f99a83/Google_Contacts.png?w=1920",
    category: "communication",
    name: "Google Contacts",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/2vwBNRLpLdC6JQI5rnUZwu/bbde843e3491ee72439baf8291599330/Slack.png?w=1920",
    category: "communication",
    name: "Slack",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/7BEaHMrTdZAIKwJ2dkOc5o/098369f6fb52daa4589c5a91b96d5cac/SMS.png?w=1920",
    category: "communication",
    name: "SMS",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/4htiy3BlIeZSxsn1pAnOvq/c0e29d614d727aafbdefae28ac03c973/Twilio.png?w=1920",
    category: "communication",
    name: "Twilio",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/7HJJ3kTNiKySvQgmA3KDWQ/3c13ec985d62060c141e32518c288cc4/Twitter.png?w=1920",
    category: "communication",
    name: "Twitter",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/2vMt6ar55pF9vTh8sji6ZO/08d7b35eaa1acc70d435d4774371c99d/Zendesk.png?w=1920",
    category: "Support",
    name: "Zendex",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/5kzVhvA5RdH8cTiQUmrieB/b984adaa23d68583d252e2f0f8103754/Stripe.png?w=1920",
    category: "payment",
    name: "Stripe",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/6T4Sy4JmR8DwyoMO9MjGQ8/650f8b463045861694331fc965469a7a/Salesforce.png?w=1920",
    category: "CRM",
    name: "Salesforce",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/A2ffF1OsWIIwHgucF8dae/8062ee96330de9fc117caf725838a123/Soundcloud.png?w=1920",
    category: "media",
    name: "Sound Cloud",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/64CC8qAvCj18iUzAZBkAUq/f0b30a33d85df56a931d9b1aaaecd8c8/Wordpress.png?w=1920",
    category: "media",
    name: "WordPress",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/1sDE34FyskOT0JLrEawYWZ/f8fd48996484854a02562b257d6f0a40/Youtube.png?w=1920",
    category: "media",
    name: "Youtube",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/3Evgc2xeNV10HiDpvf2Qmb/c6822726ac20f487f57b42c6d4c81f59/Pocket.png?w=1920",
    category: "bookmark",
    name: "Pocket",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/4Uh2qT7gNwThkOsyElsV97/b9c69801f583175b8fc238e067d19e31/Jotform.png?w=1920",
    category: "form",
    name: "Jotform",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/zxHy8aq3v6L4kx0VjVjfy/f008fb0d5aadcdc9673b83045caa868c/Typeform.png?w=1920",
    category: "form",
    name: "Typeform",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/6UoTxfu9xcVlNfFYo1Ar2P/12eb0b54b1f897ed6ebe662831448fa6/Github.png?w=1920",
    category: "development",
    name: "Github",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/1tGQyRx4A6PM9BWbcxljD5/bf300b2553dc9d88aadb545efb6c4e6b/Eventbrite.png?w=1920",
    category: "events",
    name: "Eventbrite",
  },
  {
    img: "https://images.ctfassets.net/wl95ljfippl8/3E2y3YdwKlaSFNbFtHrEJH/caeea431b8912887f52603e638f1cb47/Google_Calendar.png?w=1920",
    category: "events",
    name: "Google Calender",
  },
];
const ProductIntegration = () => {
    let [pData, setPData] = useState([...data])
  const handleChange = (e)=>{
    let name = e.target.name
    let val = e.target.checked;
    if (val === true) {
      let newD = pData.filter((el) => {
        return el.category === name;
      })
      setPData([...newD]);
      console.log(newD)
    }
    else {
      setPData([...data])
    }
    console.log(name ,val)
  }
  return (
    <Box maxW={"1300px"} pt="130px" m="auto">
      <Box
        display="flex"
        bgColor={"#0C4543"}
        paddingTop={20}
        pl={10}
        pr={10}
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        gap={10}
        justifyContent="space-between"
        color={"white"}
        pb={20}
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
            >
              Connect Your Data
            </Text>
          </Box>
        </Box>
        <Box
          width={["full", "full", "full", "full", "40%", "40%"]}
          display={"flex"}
          alignItems="center"
        >
          <Text
            fontSize={{ base: "md", sm: "lg", lg: "lg" }}
            fontWeight={"bold"}
          >
            End silos with a unique platform that connects every part of your
            work.
          </Text>
        </Box>
      </Box>

      {/* 2 featured  */}
      <Box px={10} >
        <Box py={8} borderBottom="1px solid black">
          <Text fontSize={"lg"} fontWeight="bold">
            Featured Integrations
          </Text>
        </Box>
        <SimpleGrid columns={[1, 1, 1, 3, 3]} spacing={10} pt={6} >
          <Box boxShadow="md" border="1px solid #8a8686" borderRadius={5}>
            <Image src={gDrive} alt="gDrive" w={170} />
            <Text fontWeight={"bold"} p={4}>
              Google Drive
            </Text>
          </Box>
          <Box boxShadow="md" border="1px solid #8a8686" borderRadius={5}>
            <Image src={salesForce} />
            <Text fontWeight={"bold"} p={4}>
              Salesforce
            </Text>
          </Box>
          <Box boxShadow="md" border="1px solid #8a8686" borderRadius={5}>
            <Image src={zendex} />
            <Text fontWeight={"bold"} p={4}>
              Zendex
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* container  */}
      <Box px={10} py={14}>
        <Stack >
          <Flex direction="row">
            <Stack spacing={4} width={"30%"} display="flex" flexDirection={"column"} >
              <Stack direction="column" spacing={2} justifyContent="center" border="1 solid red" >
                <Text fontWeight="bold">Category:</Text>
                <Checkbox name="project" onChange={handleChange}>Project Management</Checkbox>
                <Checkbox name="file" onChange={handleChange}>File Management</Checkbox>
                <Checkbox name="communication" onChange={handleChange}>Communication</Checkbox>
                <Checkbox name="events" onChange={handleChange}>Events</Checkbox>
                <Checkbox name="social" onChange={handleChange}>Social Networking</Checkbox>
                <Checkbox name="development" onChange={handleChange}>Devlopment</Checkbox>
                <Checkbox name="form" onChange={handleChange}>Forms</Checkbox>
                <Checkbox name="bookmark" onChange={handleChange}>Bookmarking</Checkbox>
                <Checkbox name="CRM" onChange={handleChange}>CRM</Checkbox>
                <Checkbox name="media" onChange={handleChange}>Media</Checkbox>
                <Checkbox name="payment" onChange={handleChange}>Payments</Checkbox>
                <Checkbox name="customer" onChange={handleChange}>Customer Support</Checkbox>
              </Stack>
            </Stack>
            <Stack width={"70%"} margin="auto">
              <SimpleGrid columns={[2,2,2,3,3,3]} spacing={[4,4,6,8,10]}>
                {pData.map((el,i) => (
                    <Box key={i}>
                        <Box>
                            <Image src={el.img} width="100%" rounded={12} />
                        </Box>
                        <Text>{el.name}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductIntegration;
