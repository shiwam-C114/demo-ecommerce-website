import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { CartItem } from "../Components/cartItem";
import { CartOrderSummary } from "../Components/CartOrderSummary";


export const Cart = () => {
    const [cartData, setCartData] = React.useState()
    function fetchCart() {
        fetch("https://picayune-brindle-porcupine.glitch.me/cart")
          .then((r) => r.json())
          .then((data) => {
            setCartData(data);
            console.log(data)
          });
    }

    React.useEffect(() => {
    fetchCart()
    }, [])
    
    return(
  <Box
    maxW={{
      base: "3xl",
      lg: "7xl",
    }}
    mx="auto"
    px={{
      base: "4",
      md: "8",
      lg: "12",
    }}
    py={{
      base: "6",
      md: "8",
      lg: "12",
    }}>
    <Stack
      direction={{
        base: "column",
        lg: "row",
      }}
      align={{
        lg: "flex-start",
      }}
      spacing={{
        base: "8",
        md: "16",
      }}>
      <Stack
        spacing={{
          base: "8",
          md: "10",
        }}
        flex="2">
        <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartData?.length} items)
        </Heading>

        <Stack spacing="6">
          {cartData?.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
)
}