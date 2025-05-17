import WishesTabs from "./WishesTabs";
import { Link, Flex, Text } from '@chakra-ui/react'
import { IoLogoInstagram } from "react-icons/io5";

function WishesCatalog() {
  return (
    <>
      <WishesTabs />
      <Flex
        zIndex={10}
        justify={"center"}
        textStyle={"xs"}
        direction={"row"}
        gap={4}
      >
        <Text textStyle={"xs"} fontStyle={"italic"} textAlign={"center"}>
          RKS © 2025
        </Text>
        <Link
          target="_blank"
          cursor={"pointer"}
          href="https://www.instagram.com/reen_kids_store/"
        >
          <IoLogoInstagram />
          <Text>@reen_kids_store</Text>
        </Link>
      </Flex>
    </>
  );
}

export default WishesCatalog;
