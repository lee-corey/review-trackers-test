import { Flex, Box, Text, HStack } from "@chakra-ui/react";

import Rating from "./Rating";
import ReviewType from "../types/review";
import { formatDate } from "../utils/time";

type ReviewComponentType = {
  review: ReviewType;
};

export default function ReviewComponent({ review }: ReviewComponentType) {
  return (
    <Flex
      h="250px"
      flexBasis="25.1%"
      bg="white"
      mb="20"
      p="5"
      textAlign="left"
      boxShadow="0px 2px 5px 1px #aaa"
      direction="column"
      justifyContent="space-between"
    >
      <Box>
        <Text fontWeight="bold">{review.place}</Text>
        <Rating
          size={15}
          rate={review.rating}
          scale={5}
          fillColor="gold"
          strokeColor="transparent"
        />
        <Text noOfLines={2} mt={5} color="gray.600">
          {review.content}
        </Text>
      </Box>
      <HStack>
        <Text fontSize={12} mr={5}>
          {review.author}
        </Text>
        <Text fontSize={12} color="gray.400">
          {formatDate(review.published_at)}
        </Text>
      </HStack>
    </Flex>
  );
}
