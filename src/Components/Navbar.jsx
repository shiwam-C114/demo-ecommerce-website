import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        shadow={{
          lg: "xl",
        }}
        bg={useColorModeValue("white", "gray.900")}
        px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box cursor={"pointer"}>
            <Link to="/">
              <Button colorScheme="facebook" variant={"ghost"}>
                Home
              </Button>
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Link to="cart">
                <Button colorScheme="pink">Cart</Button>
              </Link>
              <Link to="login">
                <Button colorScheme="facebook">Log in</Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
