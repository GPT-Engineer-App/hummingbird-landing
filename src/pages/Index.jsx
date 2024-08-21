import { Box, Container, Flex, Heading, Text, Button, Image, Link, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="white" py={4} position="sticky" top={0} zIndex={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Image src="https://www.hummingbird.vc/logo.png" alt="Hummingbird Ventures Logo" h="40px" />
            <HStack spacing={8}>
              <Link href="#about" fontWeight="medium">About</Link>
              <Link href="#portfolio" fontWeight="medium">Portfolio</Link>
              <Link href="#team" fontWeight="medium">Team</Link>
              <Button colorScheme="brand" size="sm">Contact</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="brand.50" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="flex-start">
            <Heading as="h1" size="3xl" fontWeight="bold">
              We back founders <br />
              building the future
            </Heading>
            <Text fontSize="xl" maxW="600px">
              Hummingbird is an early-stage venture fund investing globally in founders with transformative visions.
            </Text>
            <Button colorScheme="brand" size="lg">Learn More</Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} id="about">
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start">
            <Heading as="h2" size="2xl">About Us</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
              <Text fontSize="lg">
                Hummingbird Ventures is an early-stage venture capital firm that partners with exceptional founders building groundbreaking companies. We invest globally, with a focus on Europe, Turkey, and the MENA region.
              </Text>
              <Text fontSize="lg">
                Our team brings together diverse experiences in entrepreneurship, technology, and investing. We're passionate about supporting visionary founders and helping them turn their ideas into world-changing businesses.
              </Text>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box bg="gray.50" py={20} id="portfolio">
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start">
            <Heading as="h2" size="2xl">Our Portfolio</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {['Deliveroo', 'Kraken', 'Melio', 'Zepz'].map((company) => (
                <Box key={company} bg="white" p={6} borderRadius="md" shadow="md">
                  <Text fontSize="xl" fontWeight="bold">{company}</Text>
                </Box>
              ))}
            </SimpleGrid>
            <Button colorScheme="brand" size="lg">View All Companies</Button>
          </VStack>
        </Container>
      </Box>

      {/* Team Section */}
      <Box py={20} id="team">
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start">
            <Heading as="h2" size="2xl">Our Team</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {['Barend Van den Brande', 'Firat Ileri', 'Pamir Gelenbe', 'Arda Kutsal'].map((member) => (
                <Box key={member} textAlign="center">
                  <Image src={`https://via.placeholder.com/150?text=${member.split(' ')[0]}`} alt={member} borderRadius="full" mb={4} />
                  <Text fontSize="lg" fontWeight="medium">{member}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={12}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Image src="https://www.hummingbird.vc/logo.png" alt="Hummingbird Ventures Logo" h="40px" mb={{ base: 4, md: 0 }} />
            <HStack spacing={4}>
              <Link href="https://twitter.com/HummingbirdVC" isExternal>
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/hummingbird-ventures" isExternal>
                <FaLinkedin size={24} />
              </Link>
            </HStack>
          </Flex>
          <Text mt={8} textAlign="center">© 2023 Hummingbird Ventures. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;