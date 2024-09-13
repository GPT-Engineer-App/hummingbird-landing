import { Box, Flex, Text, Link, VStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={12}>
      <Flex maxW="1200px" mx="auto" px={4} direction={{ base: "column", md: "row" }} justify="space-between" align="center">
        <VStack align="flex-start" mb={{ base: 8, md: 0 }}>
          <Text fontWeight="bold" mb={2}>Hummingbird Ventures</Text>
          <Text fontSize="sm" color="gray.600">Early-stage venture capital firm</Text>
        </VStack>
        <Flex>
          <Link href="https://twitter.com/HummingbirdVC" isExternal mr={4}>
            <FaTwitter size={24} color="#1DA1F2" />
          </Link>
          <Link href="https://www.linkedin.com/company/hummingbird-ventures" isExternal>
            <FaLinkedin size={24} color="#0077B5" />
          </Link>
        </Flex>
      </Flex>
      <Text mt={8} textAlign="center" fontSize="sm" color="gray.600">
        © 2023 Hummingbird Ventures. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;