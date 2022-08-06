import { Box, Flex, chakra } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Porduct() {
  let { id } = useParams();
  const n = useNavigate();
  function addToCart() {
    console.log(id);
    fetch("http://localhost:8080/cart", {
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
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center">
        <Box
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
              lg: "50%",
            }}>
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}></Box>
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
              Build Your New{" "}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}>
                Idea
              </chakra.span>
            </chakra.h2>

            <chakra.h3
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold">
              Build Your New{" "}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}>
                Idea
              </chakra.span>
            </chakra.h3>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>

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
      ;
    </div>
  );
}

export default Porduct;
