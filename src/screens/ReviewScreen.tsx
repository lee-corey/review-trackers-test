import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ReviewComponent from "../components/ReviewComponent";
import reviews from "../static/reviews.json";

export default function ReviewScreen() {
  return (
    <Flex h="100%" flexWrap="wrap" justifyContent="space-between">
      {reviews.map((review) => (
        <Box h="250px" flexBasis="25.1%" key={review.id} mb="20">
          <Link to={`/reviews/${review.id}`}>
            <ReviewComponent review={review} />
          </Link>
        </Box>
      ))}
    </Flex>
  );
}
