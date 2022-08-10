import { Box, Flex, chakra, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Porduct() {
  const n = useNavigate();
  let { id } = useParams();
  const [productDetail, setProductDetail] = React.useState({})

  function fetchProduct() {
    console.log(id);
    fetch(`https://picayune-brindle-porcupine.glitch.me/products/${id}`).then(res => res.json()).then(data => {
      setProductDetail(data)
    })
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  function addToCart() {
    console.log(id);
    fetch("https://picayune-brindle-porcupine.glitch.me/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: id,
        quantity: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    n("/cart");
  }
  return (
    <div>
      <Flex
        h={"90vh"}
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={"50"}
        w="full"
        alignItems="center"
        justifyContent="center">
        <Box
          w={"60%"}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}>
          <Box
            w={{
              lg: "100%",
            }}>
            <Image  borderRadius="10px 0 0 10px" h={"100%"} src={productDetail.image}></Image>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}>
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold">
              {productDetail.brand}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}></chakra.span>
            </chakra.h2>

            <chakra.h3
              fontSize={{
                base: "l",
                md: "xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold">
              {productDetail.title}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}></chakra.span>
            </chakra.h3>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}>
              {productDetail.category}
            </chakra.p>
            <Text fontWeight="bold">₹ {productDetail.price}</Text>

            <Box mt={8}>
              <Box
                onClick={addToCart}
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "gray.800",
                }}>
                Add to cart
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    
    </div>
  );
}

export default Porduct;
