import { Box, Image } from "@chakra-ui/react";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";

export function FeedPost(){
    return(
        <>
            <PostHeader />
            <Box>
                <Image src="../../../public/img1.png"/>
            </Box>
            <PostFooter />
        </>
    )
}