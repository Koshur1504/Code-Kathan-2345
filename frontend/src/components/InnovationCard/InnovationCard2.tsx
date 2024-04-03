import {
  Card,
  Image,
  Link,
  Skeleton,
  SkeletonText,
  Text
} from "@chakra-ui/react";
import { Post } from "../../utils/types";
 interface Props{
  data?: Post;
  isLoaded: boolean;
 }

const InnovationCard2 = ({ isLoaded  ,data}:Props) => {
  console.log(isLoaded);
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
    <Card>
      
      <Link fontSize={"20"} fontWeight={"800"} as={"a"} href={data.articleLink}>
        <Skeleton isLoaded={!isLoaded}>
          
          <Image src={data.image2}  w={"100%"}/>
        </Skeleton>
        <SkeletonText isLoaded={!isLoaded} width={"fit-content"}>
          {data.title}
        </SkeletonText>
      </Link>{" "}
      <SkeletonText isLoaded={!isLoaded}>
        {" "}
        <Text>
          {data.Description}
        </Text>{" "}
      </SkeletonText>
      <br />
      <SkeletonText isLoaded={!isLoaded}>
        {" "}
        <Text>
          4 hrs ago | <span style={{ fontWeight: "bold" }}>NEWS</span> England
        </Text>{" "}
      </SkeletonText>
    </Card>
  );
};

export default InnovationCard2;
