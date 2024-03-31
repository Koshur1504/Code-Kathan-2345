import { Heading, Image, Text, Flex, Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import { useState } from 'react';
function SearchCard() {
    const [isLoaded] = useState(false);

    return (
        <div>

            <Box mt={10} display={{base:"block",md:"flex",}} alignItems={"center"} justifyContent={"space-around"}>

                {/* <Box>
                    <SkeletonText
                        mt={2}
                        noOfLines={1}
                        spacing="4"
                        skeletonHeight="2"
                        isLoaded={!isLoaded}
                    >
                        <Text w={"100px"} fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>2 Hrs ago
                        </Text>
                    </SkeletonText>
                </Box> */}
                <Box w={{base:"90%",md:"40%"}}>
                    <Skeleton width={"fit-content"} isLoaded={!isLoaded}>
                        <Heading size='md' textDecoration={"underline"} mt={10}>Ey Exc : Nuradiberse Talemnt benifit everyon
                        </Heading>
                    </Skeleton>

                    <SkeletonText
                        mt={2}
                        noOfLines={4}
                        spacing="4"
                        skeletonHeight="2"
                        isLoaded={!isLoaded}
                    >
                        <Text mt={4}>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.hjakxkgdc.klihsoifcuohihnsdfcfvv.fijkjljijid.
                        </Text>
                        <Flex>
                            <Text fontWeight="400" fontSize="14px" display="flex" mt={4} >
                                <Text fontWeight="600" color={"black"} px={3}>NEWS </Text> Business
                            </Text>

                        </Flex>
                    </SkeletonText>
                    <SkeletonText
                        mt={2}
                        noOfLines={1}
                        spacing="4"
                        skeletonHeight="2"
                        isLoaded={!isLoaded}
                    >
                        <Text w={"100px"} fontWeight="400" fontSize="14px" display="flex" gap={2} mt={4}>2 Hrs ago
                        </Text>
                    </SkeletonText>
                </Box>

                <Box w={{base:"65%" ,md:"25%"}} >
                    <Skeleton width={"fit-content"} isLoaded={!isLoaded}>
                        <Image
                            objectFit='cover'

                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                    </Skeleton>
                </Box>
            </Box>

        </div>
    )
}

export default SearchCard;
