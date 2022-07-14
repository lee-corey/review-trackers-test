import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ReviewComponent from "../components/ReviewComponent";
import { useResponse } from "../context/ResponseContext";
import reviews from "../static/reviews.json";
import { Response as ResponseType } from "../types";

export default function ReviewDetailScreen() {
  const [responseInput, setResponse] = useState("");
  const { reviewId } = useParams();
  const {
    state: { response },
    dispatch,
  } = useResponse();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // alert(responseInput);
    if (reviewId) {
      const review = reviews.filter((each) => each.id === reviewId)[0];
      const data: ResponseType = {
        reviewId,
        author: review.author,
        content: responseInput,
        published_at: new Date().toDateString(),
      };

      dispatch({ type: "set", data });
    }
  };

  console.log(response, reviewId && response.get(reviewId));

  return (
    <Box h="100%">
      <Box h="250">
        <ReviewComponent
          review={reviews.filter((review) => review.id === reviewId)[0]}
        />
      </Box>

      <Box h="180" mt="20" p="5" bg="white" boxShadow="0px 2px 5px 1px #aaa">
        {reviewId && response.get(reviewId) ? (
          <div />
        ) : (
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel htmlFor="name">Type your response</FormLabel>
              <Input
                id="response"
                placeholder="response"
                onChange={(e) => setResponse(e.target.value)}
                required
              />
              <FormErrorMessage>{"error"}</FormErrorMessage>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </FormControl>
          </form>
        )}
      </Box>
    </Box>
  );
}
