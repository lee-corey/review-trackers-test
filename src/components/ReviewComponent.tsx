import { Flex, Box, Text, HStack, Icon } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

import Rating from "./Rating";
import { Review as ReviewType } from "../types";
import { formatDate } from "../utils/time";

type ReviewComponentType = {
  review: ReviewType;
  hasReview: boolean;
};

export default function ReviewComponent({
  review,
  hasReview,
}: ReviewComponentType) {
  return (
    <Flex
      h="100%"
      bg="white"
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
      <Flex justifyContent="space-between">
        <HStack>
          <Text fontSize={12} mr={5}>
            {review.author}
          </Text>
          <Text fontSize={12} color="gray.400">
            {formatDate(review.published_at)}
          </Text>
        </HStack>
        {hasReview && <Icon as={FaCopy} color="#2a7ae6" />}
      </Flex>
    </Flex>
  );
}
