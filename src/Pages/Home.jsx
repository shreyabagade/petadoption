import { Box, Button, Heading, Stack, Text, Input } from "@chakra-ui/react";
import React from "react";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";
import four from "../Images/4.png";
import { Link } from "react-router-dom";
const Home = () => {
   return (
      <Box width={"100%"}>
         <Box border={"3px solid #6504b5"}>
            <img
               width={"100%"}
               src="https://www.petfinder.com/sites/default/files/styles/hero_image_925_410/public/images/content/925%20hero%20image_0.jpg?itok=wmYYZbrt"
               alt=""
            />
            
            
            <br />
            
            <Heading
               position="absolute"
               top={["10%", "50%", "50%", "7%"]}
               textAlign="center"
               p={"20px 300px"}
               color="white"
            >
               Find your new best friend Browse pets from our network of shelters and rescues.
            </Heading>
            <Box 
            padding={"18% 17%"} 
            position={"absolute"} top={"8%"}>
               <Stack
                  direction={{ ms: "column", md: "row" }}
                  justifyContent={"space-evenly"}
                  gap={"50px"}
               >
                  <Box boxSize={300}  p={1} >
                     <Link to={"/dogadopt"}>
                     <img src={one} alt="1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}/>
                     </Link>
                  </Box>
                  
                  <Box boxSize={300}  p={1} >
                  <Link to={"/catadopt"}>
                     <img src={two} alt="2"style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
                     </Link>
                  </Box>

                  <Box boxSize={300}  p={1} >
                  <Link to={"/catadopt"}>
                     <img src={three} alt="2"style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
                     </Link>
                  </Box>
               </Stack>
            </Box>
         </Box>
         <Box mt={"-30px"} bg={"#6504b5"}>
         </Box>
        <br>
        </br>
         <Box p={10}>
            <Stack direction={{ base: "column", md: "row" }}>
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
                     alt=""
                  />
                  <Heading p={5} fontStyle={"Poppins"}>Dogs Adoption Article</Heading>
                  <Text p={5}>Learn about caring for your new dog</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #F4717C"}
                     p={"10px 250px"}
                     color="#FF5A30"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                 
               </Box>
               <br></br>
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
                     alt=""
                  />
                  <Heading p={5}>Cat Adoption Article</Heading>
                  <Text p={5}>Helpful insights on what to expect</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #F4717C"}
                     p={"10px 250px"}
                     color="#FF5A30"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                
               </Box>
            </Stack>
         </Box>
      </Box>
   );
};

export default Home;
