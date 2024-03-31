import {
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Post } from "../../utils/types";

const IMAGE =
  "https://ichef.bbci.co.uk/news/800/cpsprodpb/FDED/production/_133050056_2023-11-01t134749z_176733597_rc2n34al49of_rtrmadp_3_israel-palestinians-lebanon-village-1.jpg.webp";

interface Props {
  data: Post;
  isDefault?: boolean;
}

export default function Card2a({ data, isDefault }: Props) {
  return (
    <Center
      as="a"
      href={data.artilcleLink}
      target="_black"
      _hover={{ filter: "brightness(120%)", textDecoration: "underline" }}
    >
      <Box role={"group"} w={"full"}>
        <Box>
          <Image
            height={"100%"}
            width={"100%"}
            objectFit={"cover"}
            src={isDefault ? IMAGE : data.image2}
            alt="#"
          />
        </Box>
        <Stack
          align={"start"}
          textAlign={"start"}
          gap={4}
          mt={{ base: 0, lg: 4 }}
        >
          <Heading fontSize={"3xl"} fontWeight={700}>
            {data.title}
          </Heading>
          <Stack direction={"row"} align={"start"}>
            <Text fontSize={"15px"}>{data.Description}</Text>
          </Stack>
          <Flex>
            <Text
              fontWeight="400"
              fontSize="14px"
              display="flex"
              gap={2}
              mt={4}
            >
              {data.time} hrs ago{" "}
              <Text fontWeight="600">| {data.source} |</Text>{" "}
              {data.category.toLocaleUpperCase()}
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
