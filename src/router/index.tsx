import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

import ReviewsHeader from "../components/ReviewsHeader";

import ReviewDetailScreen from "../screens/ReviewDetailScreen";
import ReviewScreen from "../screens/ReviewScreen";

export default function Router() {
  return (
    <BrowserRouter>
      <Box h="100%" minH="100vh" textAlign="center" fontSize="xl" bg="gray.200">
        <Flex direction="column">
          <ReviewsHeader />
          <Box
            flex="1"
            h="100%"
            pl={{ base: "5", xl: "40" }}
            pr={{ base: "5", xl: "40" }}
            pt="35"
          >
            <Routes>
              <Route path="/" element={<Navigate replace to="/reviews" />} />
              <Route path="/reviews" element={<ReviewScreen />} />
              <Route
                path="/reviews/:reviewId"
                element={<ReviewDetailScreen />}
              />
            </Routes>
          </Box>
        </Flex>
      </Box>
    </BrowserRouter>
  );
}
