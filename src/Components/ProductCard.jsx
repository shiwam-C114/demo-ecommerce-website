import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ProductCard = (props) => {
  const { product, rootProps } = props;
    const { title, image, price, id } = product;

    const n = useNavigate();
  return (
    <Stack
      //   borderWidth={1}
      //   borderRadius={10}
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
      {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={2 / 2}>
          <Image
            src={image}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: "md",
              md: "xl",
            })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}>
            {title}
          </Text>
          <Text>₹ {price}</Text>
        </Stack>
        <HStack></HStack>
      </Stack>
      <Stack align="center">
       
              <Button onClick={() =>{n(`product/${id}`)}} colorScheme="blue" width={"full"}>
            More details
          </Button>
        
      </Stack>
    </Stack>
  );
};
