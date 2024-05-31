import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AllTutors from "../Data/AllTutorsForm.png";
import "./BottomBar.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link} from "react-router-dom";

const BottomBar = () => {

  

  return (
    <>
      <Box
        className="gradient_anim_btn"
        position="fixed"
        bottom={0}
        height={{ base: 70, sm: 110, md: "120", lg: "130" }}
        padding={{ base: 2, sm: 5, md: 5, lg: 5 }}
      >
        <Box
          width={{ base: "100%", sm: "100%", md: "90%", lg: "84%" }}
          margin={"auto"}
          mt={{ sm: 0, md: 0, lg: 0 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex>
            <Box
              width={"25%"}
              height={"auto"}
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              display={{ base: "none", sm: "block", md: "block", lg: "block" }}
            >
              <Image
                margin={"auto"}
                mt={{ sm: 0, md: 0, lg: -4 }}
                width={{ sm: "100%", md: "100%", lg: "84%" }}
                src={AllTutors}
              />
            </Box>
            <Box width={{ base: "100%" }}>
              <Flex justifyContent={"space-between"}>
                <Stack>
                  <Stack
                    gap={{ base: 0, sm: 1, md: 1, lg: 0 }}
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    marginTop={"1"}
                  >
                    <Text
                      color={"rgb(255,200,69)"}
                      fontSize={32}
                      fontWeight={640}
                    >
                      <Flex
                        align={"center"}
                        gap={{ base: 1, sm: 2, md: 3, lg: 3 }}
                      >
                        <Flex
                          alignItems={"center"}
                          fontSize={{ base: 16, sm: 18, md: 20, lg: 26 }}
                        >
                          <FaIndianRupeeSign /> 199{" "}
                        </Flex>

                        <Text fontSize={{ base: 12, sm: 14, md: 16, lg: 20 }}>
                          <s
                            style={{
                              color: "silver",
                              fontWeight: 400,
                            }}
                          >
                            2999
                          </s>
                        </Text>
                      </Flex>
                    </Text>
                    <Text
                      fontSize={{ base: 12, sm: 14, md: 16, lg: 16 }}
                      fontWeight={400}
                      color={"whitesmoke"}
                    >
                      9th June, 4:00 PM - 7:00 PM
                    </Text>
                  </Stack>
                </Stack> 

                <Box alignItems={"center"}>
                  <Link to="https://pages.razorpay.com/stocktutor">
                  <Button
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                    borderRadius={20}
                    bg={"rgb(255,200,69)"}
                    color={"black"}
                    fontSize={{ base: 8, sm: 12, md: 16, lg: 24 }}
                    fontWeight={640}
                    mt={{ base: "4%", sm: "15%", md: "15%", lg: "15%" }}
                  
                  >
                    Book Your Seat Now
                  </Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default BottomBar;
