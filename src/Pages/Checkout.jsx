

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Heading,
  Text,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import {Link} from "react-router-dom"

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <Box py={10} pt={"140px"} bg={"#F7FAFC"} m="auto">
      <Heading textAlign={"center"} mb={4}>
        Checkout
      </Heading>
      <Stack
        spacing={4}
        width="lg"
        m="auto"
        bg={"white"}
        p="40px"
        rounded={20}
        boxShadow="md"
      >
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Enter your name"
            bg={"#EDF2F7"}
            isRequired={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            bg={"#EDF2F7"}
            isRequired={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            id="address"
            placeholder="Enter your address"
            bg={"#EDF2F7"}
            isRequired={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Select id="country" bg={"#EDF2F7"} isRequired={true}>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="card-number">Card Number</FormLabel>
          <Input
            id="card-number"
            placeholder="Enter your card number"
            bg={"#EDF2F7"}
            isRequired={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="expiry-date">Expiry Date</FormLabel>
          <Input
            id="expiry-date"
            placeholder="Enter your card expiry date"
            bg={"#EDF2F7"}
            isRequired={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="cvv">CVV</FormLabel>
          <Input
            id="cvv"
            placeholder="Enter your CVV"
            bg={"#EDF2F7"}
            isRequired={true}
          />
        </FormControl>
        <Button mt={4} variantColor="blue" type="submit" onClick={handleClick}>
          Place Order
        </Button>
        <Text mt={2}>
          By placing your order, you agree to the terms and conditions
        </Text>
      </Stack>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Status</ModalHeader>
          <ModalBody>
            Payment Successful
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={() => setIsOpen(false)}>
              <Link to={"/"}>Close</Link> 
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Checkout;
