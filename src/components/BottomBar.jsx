import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import AllTutors from "../Data/AllTutorsForm.png";
import { PhoneIcon } from "@chakra-ui/icons";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./BottomBar.css";

const BottomBar = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleClick = async () => {
    if (!fname || !email || !phone) {
      toast({
        title: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!validatePhone(phone)) {
      toast({
        title: "Invalid phone number.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL, {
        FullName: fname,
        Email: email,
        Phone: phone,
      });

      if (phone.length !== 10) {
        toast({
          title: "Enter Correct phone Number",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }

      if (response.data.message === "User created") {
        toast({
          title: "Registration successful.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/success");
      } else {
        toast({
          title: response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box
        className="gradient_anim_btn"
        position="fixed"
        bottom={0}
        width="100%"
        height={{ base: 70, sm: 110, md: "100", lg: "100" }} // Adjusted height
        padding={"2%"}
        paddingBottom={"10px"} // Added 10px padding from the bottom
      >
        <Box
          width="100%"
          margin={"auto"}
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
                  <Button
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                    borderRadius={20}
                    bg={"rgb(255,200,69)"}
                    color={"black"}
                    fontSize={{ base: 15, sm: 15, md: 15, lg: 24 }}
                    fontWeight={640}
                    mt={{ base: "4%", sm: "15%", md: "15%", lg: "15%" }}
                    marginBottom={"5%"}
                    onClick={onOpen}
                  >
                    Book your seat now!
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box>
              <Box>
                <Image src={AllTutors} />
              </Box>
              <Flex className="formbox-flex">
                <FormControl id="fname" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder="Full name"
                    value={fname}
                    type="text"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </FormControl>
              </Flex>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email address"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="phone" isRequired>
                <FormLabel>Contact</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.400" />
                  </InputLeftElement>
                  <Input
                    type="number"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <Box margin={"auto"} mt={4}>
                <Button
                  width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                  size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                  borderRadius={20}
                  bg={"rgb(255,200,69)"}
                  color={"black"}
                  fontSize={{ base: 8, sm: 12, md: 16, lg: 24 }}
                  fontWeight={640}
                  mt={{ base: "4%", sm: "15%", md: "15%", lg: "15%" }}
                  onClick={handleClick}
                >
                  Book Your Seat Now
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BottomBar;
