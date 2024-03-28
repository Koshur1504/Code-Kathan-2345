// Card1.tsx
import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import { useState } from 'react';

const Card1 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  let myObj = {
    title: "Driver recover bodies from Baltimore bridge",
    description: "Searches continue for four other people missing after two bodies are found in submerged truck",
    image: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/7231/production/_133033292_gettyimages-2107856156.jpg"
  };

  return (
    <Stack>
      <Box width='300px' height='auto' className='pt-serif-regular' >
        <Image width='300px' src={myObj.image} alt="Image" />
        <Heading m={0} >{myObj.title}</Heading>
        <p>{myObj.description}</p>
      </Box>
    </Stack>
  );
};

export default Card1;
