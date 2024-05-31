import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import "./Combine.css";

import { FaCalendar, FaCircleCheck, FaClock } from "react-icons/fa6";
import textbg from "../Data/textbg.webp";
import { useState } from "react";
import axios from "axios";
import logo from "../Data/logo.png"
import { useNavigate } from "react-router-dom";


import crashtext from "../Data/animatedtext.gif";
import { motion } from "framer-motion";




const Combine = () => {
  const text = "Take Charge of Your Future with StockTutor's 3 Hours Crash Course".split(" ");

  const navigate = useNavigate()
  const toast = useToast();
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
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL , {
        FullName: fname,
        Email: email,
        Phone: phone,
      });

      if (phone.length !== 10) {
        toast({
          title: "Enter Correact phone Number",
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
        navigate("/success")
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
    <>
      <Box bgGradient="linear(to-r, #131543, #525368, #131543)" pb={{ base: 2, sm: 4, md: 16, lg: 16 }}>


        <Stack p={12} gap={{ base: 4, sm: 8, md: 8, lg: 12 }}>

          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
            justifyContent={"space-around"}
            gap={{ base: 5, sm: 5, md: 10, lg: 0 }}
          >
            {/* *************************************Left Portion************************************************* */}
            {/* ************************************************************************************************** */}


            <div className="left-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>

          











           











              <Box  className='animated-textbox' display={{ base: 'block', sm: 'block', md: 'block', lg: 'block' }} >
                <div style={{display:"flex", gap:'16px', alignItems:'center', paddingLeft:'20px'}}>
                  <Image width={'20%'} height={'100%'} src={logo} alt="logo" />
                  <Image style={{ maxWidth: "100%" }} src={crashtext} alt="crashcoursetext" />
                </div>
              </Box>

              <div className="left-text-box">

              </div>
              <div className="form-container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={fname} onChange={(e) => setFname(e.target.value)} required placeholder="Full name" />


                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email address" />

                <label htmlFor="contact">Contact</label>
                <input type="text" id="contact" name="contact" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Phone number" />


              </div>
              <button onClick={handleClick} className="submimt-btn" style={{ backgroundColor: "gold", width: '75%', padding: '16px', borderRadius: '16px', boxShadow: '8px 8px white', border: '1px solid black', fontSize: '20px', fontWeight: "600" }}>
                Book your seat now!
              </button>
            </div>



            {/* ************************************* IFrame ************************************************* */}
            {/* ************************************************************************************** */}
            <Box
              width={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
              margin={"auto"}
              boxShadow={"0px 12px 12px 12px"}
            >
              <Box>


                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    id="vimeoPlayer"
                    src="https://player.vimeo.com/video/947728794?badge=0&autopause=0&player_id=0&loop=1&app_id=58479&loop=1&byline=0&title=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '20px 20px 0px 0px' }}
                    title="Crash course video"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <script>
                  var player = new Vimeo.Player(document.getElementById('vimeoPlayer'));
                  player.setLoop(true);
                  player.play();
                </script>



              </Box>
              <Box
                borderRadius={"0px 0px 20px 20px"}
                bgImage={textbg}
              >
                <Grid
                  padding={{ base: 2, sm: 2, md: 4, lg: 8 }}
                  fontWeight={600}
                  fontSize={{ base: 14, sm: 16, md: 20, lg: 20 }}
                  gap={2}
                >
                  <Flex alignItems={"center"} gap={4}>
                    <Box>
                      <FaCircleCheck />
                    </Box>
                    <Box>Knowing Institutional Activities</Box>
                  </Flex>

                  <Flex alignItems={"center"} gap={4}>
                    <Box>
                      <FaCircleCheck />
                    </Box>
                    <Box>Market Research & Psychology</Box>
                  </Flex>

                  <Flex alignItems={"center"} gap={4}>
                    <Box
                      style={{ alignItem: "center", justifyItems: "center" }}
                    >
                      {" "}
                      <FaCircleCheck />
                    </Box>
                    <Box>Selecting Right Stocks</Box>
                  </Flex>

                  <Flex alignItems={"center"} gap={4}>
                    <Box>
                      <FaCircleCheck />
                    </Box>
                    <Box>Trading Strategies</Box>
                  </Flex>
                </Grid>


                <div style={{display:'flex', gap:"10px", padding:"2%", paddingLeft:"5%", paddingRight:"5%"}}>
                <Flex className="gradient_anim_btn_combine1">
                  <FaCalendar />
                  <Box>2nd June, 2024</Box>
                </Flex>

                <Flex className="gradient_anim_btn_combine1">
                  <FaClock />
                  <Box>4:00 PM - 7:00 PM</Box>
                </Flex>
              </div>


              </Box>
            </Box>


          </SimpleGrid>

          {/* ************************************************* Bottom Section ************************************************ */}

          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 2, lg: 4 }}
            className="bottomtab"
            margin={"auto"}
            border={"1px solid black"}
            width={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
            justifyContent={"space-between"}
            padding={4}
            borderRadius={20}
            bgColor={"#D7AA3B"}
            gap={{ base: 2, sm: 2, md: 2, lg: 4 }}
          >
            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                12k+
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                Students Enrolled
              </Text>
            </Box>

            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                25k+
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                Trading Community
              </Text>
            </Box>

            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                5
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                NISM Certified Tutors
              </Text>
            </Box>

            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                10+
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                Certified Courses
              </Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  );
};

export default Combine;
