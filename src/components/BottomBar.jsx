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
    <div className="main-box" style={{width:'100%', display:'flex', alignItems:'center', padding:'16px', justifyContent:'space-between'}}>
      <div className="img-text-box" style={{display:'flex', alignItems:'center',gap:'8px'}}>
        <div className="tutors-img">
            <img src={AllTutors} alt="all tutors imge" width={'120px'}/>
        </div>
        <div>
            <p style={{color:'gold', fontSize:'20px', fontWeight:'600'}}>₹ 199 <span style={{textDecoration:'line-through', color:'#c1c1c1', fontSize:'16px', fontWeight:'500'}}>2999</span></p>
            <p style={{color:'white', fontSize:'16px'}}>9th June, 4:00 PM - 7:00 PM</p>
        </div>
      </div>
      <div>
        <p style={{background:'#F4C113', padding:'12px 20px 12px 20px', borderRadius:'25px'}}>Book your seat now!</p>
      </div>
    </div>
  );
};

export default BottomBar;
