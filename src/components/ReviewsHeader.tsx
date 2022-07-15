import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ReviewsHeader() {
  return (
    <Box h="80px" w="100%" bg="blue.500" pl={{ base: 5, xl: 40 }}>
      <Flex h="100%" justifyContent="flex-start" alignItems="center">
        <Link to="/reviews">
          <Text color="white">Reviews</Text>
        </Link>
      </Flex>
    </Box>
  );
}
