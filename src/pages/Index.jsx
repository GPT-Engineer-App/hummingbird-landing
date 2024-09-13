import { Box, Container, Heading, Text, Button, Image, VStack, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <Box bg="blue.50" pt={32} pb={20}>
        <Container maxW="1200px">
          <VStack spacing={8} align="flex-start">
            <Heading as="h1" size="3xl" fontWeight="bold" lineHeight="1.2">
              We back founders <br />
              building the future
            </Heading>
            <Text fontSize="xl" maxW="600px" color="gray.700">
              Hummingbird is an early-stage venture fund investing globally in founders with transformative visions.
            </Text>
            <Button colorScheme="blue" size="lg">Learn More</Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} id="about">
        <Container maxW="1200px">
          <VStack spacing={12} align="flex-start">
            <Heading as="h2" size="2xl">About Us</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
              <Text fontSize="lg" color="gray.700">
                Hummingbird Ventures is an early-stage venture capital firm that partners with exceptional founders building groundbreaking companies. We invest globally, with a focus on Europe, Turkey, and the MENA region.
              </Text>
              <Text fontSize="lg" color="gray.700">
                Our team brings together diverse experiences in entrepreneurship, technology, and investing. We're passionate about supporting visionary founders and helping them turn their ideas into world-changing businesses.
              </Text>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box bg="gray.50" py={20} id="portfolio">
        <Container maxW="1200px">
          <VStack spacing={12} align="flex-start">
            <Heading as="h2" size="2xl">Our Portfolio</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {['Deliveroo', 'Kraken', 'Melio', 'Zepz'].map((company) => (
                <Box key={company} bg="white" p={6} borderRadius="md" shadow="md">
                  <Text fontSize="xl" fontWeight="bold">{company}</Text>
                </Box>
              ))}
            </SimpleGrid>
            <Button colorScheme="blue" size="lg">View All Companies</Button>
          </VStack>
        </Container>
      </Box>

      {/* Team Section */}
      <Box py={20} id="team">
        <Container maxW="1200px">
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

      <Footer />
    </Box>
  );
};

export default Index;