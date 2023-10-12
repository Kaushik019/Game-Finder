import { Container, Flex, HStack, Hide, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex padding="10px" display="flex" justify="space-between">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Container width="100%" marginTop={3}>
        <SearchInput />
      </Container>
      <HStack paddingX={5}>
        <ColorModeSwitch />
        <Hide below="md">
          <Text whiteSpace="nowrap">Dark Mode</Text>
        </Hide>
      </HStack>
    </Flex>
  );
};

export default Navbar;
