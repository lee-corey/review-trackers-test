import React from "react";
import { render, screen } from "@testing-library/react";
import Rating from "../Rating";

describe("Header", () => {
  it("should have 5 elements ", async () => {
    render(
      <Rating
        size={15}
        rate={5}
        scale={5}
        fillColor="gold"
        strokeColor="transparent"
      />
    );
    const rateElements = screen.getAllByLabelText(/Rate [0-9]/);
    expect(rateElements.length).toEqual(5);
  });
  it("should have 2 stars", async () => {
    const { container } = render(
      <Rating
        size={15}
        rate={2}
        scale={5}
        fillColor="gold"
        strokeColor="transparent"
      />
    );
    // const rateElements = getAllByLabelText(/Rate [0-9]/);
    const rateElements = container.querySelectorAll(`svg[fill-opacity="100%"]`);
    expect(rateElements.length).toEqual(2);
  });
});
