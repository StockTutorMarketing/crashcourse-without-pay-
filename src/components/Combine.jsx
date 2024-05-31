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
} from "@chakra-ui/react";
import "./Combine.css";
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import textbg from "../Data/textbg.webp";
import crashtext from "../Data/animatedtext.gif";
import { motion } from "framer-motion";
import logo from "../Data/logo.png"
import { Link } from "react-router-dom";

const Combine = () => {
  const text = "Take Charge of Your Future with StockTutor's 3 Hours Crash Course".split(" ");






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
            <div className="left-box">
              <div className="left-text-box">
                <p style={{ fontSize: '36px', fontWeight: '500', width: '80%', color: 'white', lineHeight:'46px'}}>Take charge of your future with <span style={{ color: 'gold' }}>Stocktutor's 3 Hours</span> Crash Course</p>
              </div>
              <div className="form-container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"  required placeholder="Enter your name"/>

                <label htmlFor="contact">Contact</label>
                <input type="text" id="contact" name="contact" required placeholder="Enter your number"/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email"/>
              </div>
              <button className="submimt-btn" style={{backgroundColor:"gold", width:'75%', padding:'16px', borderRadius:'16px', boxShadow:'8px 8px white', border:'1px solid black', fontSize:'20px', fontWeight:"600"}}>
                  Book your seat now!
              </button>
            </div>



            {/* ************************************* IFrame ************************************************* */}
            {/* ************************************************************************************** */}
            <Box
              width={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
              margin={"auto"}
            >
              <Box>


                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    id="vimeoPlayer"
                    src="https://player.vimeo.com/video/947728794?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius:'20px 20px 0px 0px' }}
                    title="Crash course video"
                    controls={false}
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
