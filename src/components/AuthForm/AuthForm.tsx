import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AuthForm(){
    const [isLogin, setIsLogin] = useState<boolean>();

    const [inputs, setInputs] = useState<{email: string; password: string; confirmPassWord: string}>({
        email:'',
        password:'',
        confirmPassWord:''
    })

    const navigate = useNavigate();

    const handleAuth = () => {
        if(!inputs.email || !inputs.password){
            alert("por favor prencha todos os campos")
            return;
        }
        navigate("/")
    }

    return(
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src="../../../public/logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
                    <Input 
                        placeholder="Email"
                        fontSize={14}
                        type="email"
                        value={inputs.email}
                        onChange={(e) => setInputs({...inputs,email:e.target.value})}
                    />
                    <Input 
                        placeholder="Password"
                        fontSize={14}
                        type="password"
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs,password:e.target.value})}
                    />
                    {!isLogin ? <Input placeholder='Confirm Password' 
                    value={inputs.confirmPassWord}
                    onChange={(e) => setInputs({...inputs,confirmPassWord:e.target.value})}
                    fontSize={14} type="password"/> : null}

                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
                        {isLogin? "log in" : "sign up"}
                    </Button>

                    {/* */}
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"}/>
                        <Text mx={1} color={"white"}>OU</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"}/>   
                    </Flex>

                    <Flex >
                        <Image  src="../../../public/google.png" w={5} alt="Google logo"/>
                        <Text mx="2" color={"blue.500"}>
                            Entrar com o Google
                        </Text>
                    </Flex>
                </VStack>
            </Box>

            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>

                        {isLogin ? "não possuo uma conta?" : "Já possue uma conta?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"}>
                        {isLogin ? "Cadastrar" : "Entrar"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}