import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const ResourceModal = () => {
  return (
    <>
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
        <Text>Get inspired by use cases that'll make you fall in love with <Text>Airtable</Text> </Text>
      </Box>
      <Box>
        <Text as={"h1"} fontWeight="bold" pb={1.5}>
          Enterprise Overview
        </Text>
        <Text>See how Airtable scales for large and complex organizations</Text>
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
    </>
  )
}

export default ResourceModal
