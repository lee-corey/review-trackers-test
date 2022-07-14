import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { FaReply } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useParams } from "react-router-dom";

import ReviewComponent from "../components/ReviewComponent";
import { useResponse } from "../context/ResponseContext";
import reviews from "../static/reviews.json";
import { Response as ResponseType } from "../types";
import { formatDate } from "../utils/time";

export default function ReviewDetailScreen() {
  const [responseInput, setResponse] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { reviewId } = useParams();
  const {
    state: { response },
    dispatch,
  } = useResponse();
  const responseData = reviewId ? response.get(reviewId) : null;
  const review = reviews.filter((each) => each.id === reviewId)[0];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // alert(responseInput);
    if (reviewId) {
      if (editMode) {
        const data: ResponseType = {
          reviewId,
          author: review.author,
          content: responseInput,
          published_at: new Date().toDateString(),
        };
        dispatch({ type: "edit", data });
        setEditMode(false);
      } else {
        const data: ResponseType = {
          reviewId,
          author: review.author,
          content: responseInput,
          published_at: new Date().toDateString(),
        };

        dispatch({ type: "set", data });
      }
    }
  };

  return (
    <Box h="100%">
      <Box h="250">
        <ReviewComponent review={review} hasReview={false} />
      </Box>

      <Box h="180" mt="20" p="5" bg="white" boxShadow="0px 2px 5px 1px #aaa">
        {!editMode && responseData ? (
          <Box pt="5">
            <Flex justifyContent="space-between">
              <Flex alignItems="center">
                <Icon as={FaReply} color="#2a7ae6" position="absolute" />
                <Text ml={16} color="gray.500">
                  {responseData.content}
                </Text>
              </Flex>
              <Box as={Button}>
                {/* <Icon as={BsThreeDots} color="#2a7ae6" mr="10" /> */}
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<GiHamburgerMenu />}
                    size="xs"
                    py={2}
                  />
                  <MenuList paddingLeft={2} paddingRight={2}>
                    <MenuItem onClick={() => setEditMode(true)}>Edit</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
            <Flex mt="10" ml={16}>
              <Text fontSize="12">{responseData.author}</Text>
              <Text fontSize="12" color="gray.500" ml="10">
                {formatDate(responseData.published_at)}
              </Text>
            </Flex>
          </Box>
        ) : (
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel htmlFor="name">{`${
                editMode ? "Edit" : "Type"
              } your response`}</FormLabel>
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
