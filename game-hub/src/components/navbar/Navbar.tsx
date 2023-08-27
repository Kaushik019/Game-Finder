import { Box, Text, Link, Button } from "@chakra-ui/react";

interface Props {
  colorMode: String;
  toggleColorMode: () => void;
}

const Navbar = ({ toggleColorMode }: Props) => {
  return (
    <>
      <Box bg="black" h="100px" p={10} color="white" display="flex">
        <Text fontSize={"xl"} fontWeight="extrabold">
          R A W G
        </Text>
        <Box>
          <Link m={2} fontSize={"md"}>
            LOG IN
          </Link>
          <Link m={2} fontSize={"md"}>
            SIGN UP
          </Link>
          <Link m={2} fontSize={"md"}>
            API
          </Link>
          <Button onClick={toggleColorMode}>...</Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
