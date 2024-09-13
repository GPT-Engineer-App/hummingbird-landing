import { Box, Flex, Image, Link, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="white" py={4} position="fixed" top={0} left={0} right={0} zIndex={10}>
      <Flex maxW="1200px" mx="auto" px={4} justify="space-between" align="center">
        <Image src="https://www.hummingbird.vc/logo.png" alt="Hummingbird Ventures Logo" h="40px" />
        <Flex align="center">
          <Link href="#about" mr={8} fontWeight="medium" color="gray.700">About</Link>
          <Link href="#portfolio" mr={8} fontWeight="medium" color="gray.700">Portfolio</Link>
          <Link href="#team" mr={8} fontWeight="medium" color="gray.700">Team</Link>
          <Button colorScheme="blue" size="sm">Contact</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;