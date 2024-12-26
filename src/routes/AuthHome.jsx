import React from "react";
import logo from './assets/IMG-20241118-WA0012.jpg'
import { MenuBook } from "@mui/icons-material";
import { Box, Center, Text, Input, VStack } from "@chakra-ui/react"
import { Button } from '@/components/ui/button'

export default function AuthHome () {
    return (
      <Box h="90vh"  w="100%" bg="gray.100">
        <VStack spacing="1rem"> <Text>hello home</Text>
        <Input type="text"  border="2px" variant="filled" borderRadius="xl" h="2.7rem"w="20rem" /> 
        <Input type="password" h="3rem" w="20rem" borderRadius="lg"/>
        <Button bg="blue.600"> Login</Button>
        
        </VStack>
       
      </Box>
    );
}