import WishesTabs from "./WishesTabs";
import { Link, Flex, Text } from '@chakra-ui/react'
import { IoLogoInstagram } from "react-icons/io5";
import { useContext } from "react";
import { PartyContext } from "@/pages/Invitation";

function WishesCatalog() {
  const { themeColor } = useContext(PartyContext)

  return (
    <>
      <WishesTabs />
      <Flex
        zIndex={10}
        justify={"center"}
        textStyle={"xs"}
        direction={"row"}
        gap={2}
        color={`${themeColor}.600`}
        
      >
        <Text textStyle={"xs"} fontStyle={"italic"} fontWeight={'semibold'} textAlign={"center"}>
          Powered by
        </Text>
        <Link
          target="_blank"
          cursor={"pointer"}
          href="https://www.instagram.com/reen_kids_store/"
          color={'inherit'}
          borderBottom={`2px solid ${themeColor}`}
        >
          <IoLogoInstagram />
          <Text fontWeight={'semibold'}>@reen_kids_store</Text>
        </Link>
      </Flex>
    </>
  );
}

export default WishesCatalog;
