import { Avatar, Box, Flex, Link, Tooltip} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export function SideBar() {
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "home",
            link: "/",
        },
        {
            icon: <SearchLogo />,
            text: "Seacrch",
        },
        {
            icon: <NotificationsLogo />,
            text: "Notifications",
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            icon: <Avatar size={"sm"} name="burak Orknez" src="../../../public/profilepic.png" />,
            text: "Profile",
            link: "/asaprogramer",
        }
    ];

    return(
        <Box
            height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
        >

            <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
                <Link top={"/"} as={RouterLink}  pl={2} display={{base:"none",md:"block"}}cursor={"pointer"}>
                    <InstagramLogo />
                </Link>
                <Link to={"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}} borderRadius={6} 
                    _hover={{
                        bg: "whiteAlpha.200",
                    }} 
                    cursor="pointer"
                    w={10} 
                >
                    <InstagramMobileLogo />
                </Link>
                <Flex direction={"column"} gap={5} cursor={"pointer"}>
                    {sidebarItems.map((item, index) => (
                        <Tooltip 
                            key={index}
                            hasArrow
                            label={item.text}
                            placement="right"
                            ml={1}
                            openDelay={500}
                            display={{base:"block", md:"none"}}
                        >
                            <Link
                                display={"flex"}
                                to={item.link || ''}
                                as={RouterLink}
                                alignContent={"center"}
                                gap={4}
                                _hover={{bg:"whiteAlpha.400"}}
                                borderRadius={6}
                                p={2}
                                w={ {base:10, md:"full"}}
                                justifyContent={{ base:"10", md:"flex-start"}}
                            >
                                {item.icon}
                                <Box display={{base:"none",md:"block"}} >
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>
                <Tooltip 
                    hasArrow
                    label={'Sair'}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base:"block", mb:"none"}}
                >
                    <Link
                        display={"flex"}
                        to={"/auth"}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg:"whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        marginTop={"auto"}
                        w={ {base:10, md:"full"}}
                        justifyContent={{ base:"center", md:"flex-start"}}
                    >
                        <BiLogOut size={25}/>
                        <Box display={{base:"none",md:"block"}} >
                            sair
                        </Box>
                    </Link>
                </Tooltip>
            </Flex>
        </Box>
    )
}