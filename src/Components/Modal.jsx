import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";


function Modal({ value, buttonN }) {
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
        {buttonN}
        {">"}
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
            {value}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Modal;
