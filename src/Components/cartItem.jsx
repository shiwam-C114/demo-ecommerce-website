import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useState } from "react";

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props) => {
  const {
    product_id,
    quantity
  } = props;
  const [data, setData] = useState({})
  React.useEffect(() => {
    fetch(`https://picayune-brindle-porcupine.glitch.me/products/${product_id}`).then(r => r.json()).then(data => {
      setData(data)
       
    })
  }, [])
  

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center">
      <CartProductMeta
        data={data}
        
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            // (+e.currentTarget.value);
          }}
        />
        {/* <PriceTag price={price} currency={"$"} /> */}
        <CloseButton
          // aria-label={`Delete ${title} from cart`}
          // onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}>
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            // onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        {/* <PriceTag price={price}  /> */}
      </Flex>
    </Flex>
  );
};
