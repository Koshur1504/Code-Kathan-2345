"use client";

import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Post } from "../../utils/types";

interface Props {
  data?: Post;
}

export default function Card2b({ data }: Props) {
  !data &&
    (data = {
      id: 1,
      title: "daniel Kahneman, Nobel Prize-winning psychologist, 1934-2024",
      Description:
        'Three people have been released, but the situation "is not over yet", police in the city of Ede say.',
      source: "BBC.com",
      time: 4,
      articleLink: "https://www.bbc.com/news/world-europe-68698022",
      image1:
        "https://news.google.com/api/attachments/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs=-w280-h168-p-df-rw",
      image2:
        "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs",
      category: "world",
      clicks: 283,
    });
  return (
    <Box
      as="a"
      href={data.articleLink}
      target="_blank"
      _hover={{ filter: "brightness(110%)", textDecoration: "underline" }}
    >
      <Flex w={"full"} h={"full"} direction="column">
        <Image
          width={"100%"}
          objectFit={"contain"}
          objectPosition={"center"}
          src={data.image2}
          alt="#"
          flex={1}
        />
        <Stack textAlign={"start"} flex={1}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500} mt={4}>
            {data.title}
          </Heading>
          <Stack direction={"row"} align={"start"}>
            <Text fontSize={"sm"}>{data.Description}</Text>
          </Stack>
          <Text mt={"auto"}>
            {data.time} hours ago{" "}
            <span style={{ color: "darkblack", fontWeight: "bold" }}>
              | {data.source} |{" "}
            </span>
            {data.category.toLocaleUpperCase()}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
