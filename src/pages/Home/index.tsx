
import { Box, Flex } from "@chakra-ui/react"
import Header from "../../components/Header/Header"

export function Home(){


    return <>
    <Header/>
    <Flex bg="#dc0a2d" marginTop="108px" height="calc(100vh - 108px)" padding={"10px"}>
        <Box bg="#ffffff" width={"100%"} borderRadius={10} boxShadow={`inset 0 0 4px 4px #22222268`}>

        </Box>
    </Flex>
    </>
}