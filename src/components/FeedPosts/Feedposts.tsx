import { Container } from "@chakra-ui/react";
import { FeedPost } from "./FeedPost";

export function FeedPosts(){
    return(
        <Container maxWidth={"container.sm"} p={10} px={2}>
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
        </Container>
    )
}