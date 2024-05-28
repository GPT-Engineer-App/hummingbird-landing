import { Container, Box, Heading, Image } from "@chakra-ui/react";

const LogoAndTypeform = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
        <Heading as="h1" size="2xl" mb={4}>
          Hummingbird Ventures Logo and Typeform
        </Heading>
        <Image src="https://www.hummingbird.vc/logo.png" alt="Hummingbird Ventures Logo" mb={4} />
        <iframe src="https://form.typeform.com/to/your-typeform-id" width="100%" height="500px" frameBorder="0" title="Typeform"></iframe>
      </Box>
    </Container>
  );
};

export default LogoAndTypeform;
