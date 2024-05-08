import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

export function PageLayout({children}) {
    const {pathname} = useLocation();

    return(
        <Flex >
            {/* barra lateral esquerda */}
            {pathname !== '/auth' ? (
                <Box w={{ base: "200px", md:"240px"}}>
                    <SideBar />
                </Box>
            ) : null}
            {/* barra lateral direita */}
            <Box flex={1} w={{base:"calc(100% -70px)", md: "calc(100% -240px)"}} mx={"auto"}>
                {children}
            </Box>
        </Flex>
    )
}