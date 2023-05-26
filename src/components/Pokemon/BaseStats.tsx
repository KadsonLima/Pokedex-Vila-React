import { Box, Flex , Text} from "@chakra-ui/react"
import { ProgressBar } from "../ProgressBar/ProgressBar"



const stats = [
    {name:"hp", power:45},
    {name:"atk", power:49},
    {name:"def", power:49},
    {name:"satk", power:65},
    {name:"sdef", power:65},
    {name:"spd", power:45},
]

export const BaseStats = ({color}:{color:string}) =>{

    return <Box width="100%" maxWidth={"700px"}>
            <Text textAlign={"center"} fontWeight={"bold"} color={color}>Base Stats</Text>
        <Flex flexDirection={"column"}>
            {stats.map((stat)=> {
                return  <Flex alignItems={"center"} justifyContent={"space-evenly"}>
                        <Text width="45px" textAlign={"end"} color={color} fontWeight={"medium"}>{stat.name.toUpperCase()}</Text>
                        <Text>{String(stat.power).padStart(3, '0')}</Text>
                        <ProgressBar color={color} currentValue={stat.power}/>
                </Flex>
                }
            )}
        </Flex>
    </Box>

}