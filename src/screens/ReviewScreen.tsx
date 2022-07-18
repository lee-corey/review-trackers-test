import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ReviewComponent from "../components/ReviewComponent";
import { useResponse } from "../context/ResponseContext";
import reviews from "../static/reviews.json";

export default function ReviewScreen() {
  const {
    state: { response },
  } = useResponse();
  return (
    <Flex
      h="100%"
      flexWrap="wrap"
      justifyContent="space-between"
      id="review-screen"
    >
      {reviews.map((review) => (
        <Box
          h="250px"
          flexBasis={{ base: "100%", xl: "25.1%" }}
          key={review.id}
          mb="20"
        >
          <Link to={`/reviews/${review.id}`}>
            <ReviewComponent
              review={review}
              hasReview={!!response.get(review.id)}
            />
          </Link>
        </Box>
      ))}
    </Flex>
  );
}
