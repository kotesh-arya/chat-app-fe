import React, { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormHelperText,
  Input,
  Box,
  InputGroup,
  Heading,
  FormLabel,
  Stack,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import backgroundImage from "../../assets/maevl-chatting-edited.png";
const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Container
      // bgGradient="linear(to-tr, #4F3BA9, #C7FFED)"
      bgImage={`url(${backgroundImage})`}
      maxW="100%"
      height="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      overflow="hidden"
      centerContent
    >
      <Box
        marginTop="20px"
        bg="rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(8px)"
        borderRadius="xl"
        padding="10"
        boxShadow="2xl"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        rounded="xl"
        color="black"
        maxW="xl"
        centerContent
      >
        <FormControl
          display="flex"
          as="fieldset"
          flexDir="column"
          justifyContent="space-between"
          height={"300px"}
        >
          <Heading as="h3" size="lg" textAlign="center" mb={1}>
            REGISTER
          </Heading>
          <InputGroup>
            <Input variant="flushed" placeholder="Email *" size="lg" />
          </InputGroup>
          <InputGroup>
            <Input variant="flushed" placeholder="Display Name *" size="lg" />
          </InputGroup>
          <InputGroup>
            <Input variant="flushed" placeholder="User Name *" size="lg" />
          </InputGroup>
          <InputGroup display={"flex"} justifyContent={"center"}>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter password *"
              variant="flushed"
              size="lg"
            />
          </InputGroup>
          <InputGroup
            width={"330px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Select width={"100px"} variant="filled" placeholder="Day">
              <option value="option1"> 1</option>
              <option value="option2"> 2</option>
              <option value="option3"> 3</option>
            </Select>
            <Select width={"100px"} variant="filled" placeholder="Month">
              <option value="option1">January</option>
              <option value="option2">February</option>
              <option value="option3">March</option>
            </Select>
            <Select width={"100px"} variant="filled" placeholder="Year">
              <option value="option1">2021</option>
              <option value="option2">2022</option>
              <option value="option3">2023</option>
            </Select>
          </InputGroup>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Signup;
