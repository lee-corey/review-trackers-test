import { Flex, Box, Text } from "@chakra-ui/react";

import ReviewComponent from "../components/ReviewComponent";
import reviews from "../static/reviews.json";

export default function ReviewScreen() {
  return (
    <Box textAlign="center" fontSize="xl" bg="gray.200">
      <Flex direction="column">
        <Box h="80px" w="100%" bg="blue.500" pl="40">
          <Flex h="100%" justifyContent="flex-start" alignItems="center">
            <Text color="white">Reviews</Text>
          </Flex>
        </Box>
        <Box flex="1" pl="40" pr="40" pt="15">
          <Flex h="100%" flexWrap="wrap" justifyContent="space-between">
            {reviews.map((review) => (
              <ReviewComponent key={review.id} review={review} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
