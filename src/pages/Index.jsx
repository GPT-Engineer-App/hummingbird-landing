import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Hummingbird Ventures
          </Heading>
          <Text fontSize="xl">Empowering the next generation of innovators</Text>
        </Box>

        {/* About Section */}
        <Box>
          <HStack spacing={8} align="center">
            <Box flex="1">
              <Image src="https://images.unsplash.com/photo-1572276037952-478cead56982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZW50dXJlJTIwY2FwaXRhbHxlbnwwfHx8fDE3MTY5MjI0MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Venture Capital" borderRadius="md" />
            </Box>
            <Box flex="2">
              <Heading as="h2" size="xl" mb={4}>
                About Us
              </Heading>
              <Text fontSize="lg">Hummingbird Ventures is an early stage venture capital fund dedicated to supporting visionary entrepreneurs. We provide the resources, network, and expertise to help startups grow and succeed.</Text>
            </Box>
          </HStack>
        </Box>

        {/* Portfolio Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Our Portfolio
          </Heading>
          <Text fontSize="lg" mb={4}>
            We have invested in a diverse range of companies across various industries. Here are some of our success stories.
          </Text>
          <HStack spacing={8} wrap="wrap" justify="center">
            <Box w="200px" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwwfHx8fDE3MTY5MjI0MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tech Startup" borderRadius="md" mb={2} />
              <Text fontSize="md">Tech Startup</Text>
            </Box>
            <Box w="200px" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3RhcnR1cHxlbnwwfHx8fDE3MTY5MjI0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare Startup" borderRadius="md" mb={2} />
              <Text fontSize="md">Healthcare Startup</Text>
            </Box>
            <Box w="200px" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1561525155-40a650192479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwc3RhcnR1cHxlbnwwfHx8fDE3MTY5MjI0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fintech Startup" borderRadius="md" mb={2} />
              <Text fontSize="md">Fintech Startup</Text>
            </Box>
          </HStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Get in Touch
          </Heading>
          <Text fontSize="lg" mb={4}>
            Interested in partnering with us? Reach out to learn more about how we can work together.
          </Text>
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Box>

        {/* Footer Section */}
        <Box textAlign="center" py={4}>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </HStack>
          <Text fontSize="sm" mt={4}>
            © 2023 Hummingbird Ventures. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
