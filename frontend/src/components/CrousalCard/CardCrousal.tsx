import { Card, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

const CardCrousal = () => {
  return (
    <Card maxW="sm">
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Stack mt="6" spacing="3" m={1}>
        <Heading size="md">Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with
          a sprinkle of vintage design.
        </Text>
        <Text>12 hrs ago | Culture & Experiences</Text>
      </Stack>
      <Divider />
    </Card>
  );
};

export default CardCrousal;
