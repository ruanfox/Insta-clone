import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function  PostHeader(){
    return(
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src="../../../public/img1.png" size={"sm"}/>
                <Flex fontSize={12} fontWeight={"bold"} gap='2'>
                    asaprogrammer
                    <Box color={"gray.500"}>
                        1w
                    </Box>
                </Flex>
            </Flex>
            <Box cursor={"pointer"}>
                <Text>
                    unfollow
                </Text>
            </Box>
        </Flex>
    )
}