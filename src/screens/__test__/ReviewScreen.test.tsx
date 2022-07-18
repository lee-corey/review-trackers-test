import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReviewScreen from "../ReviewScreen";
import { ResponseProvider } from "../../context/ResponseContext";

describe("Header", () => {
  it("should have 25 elements ", async () => {
    const { container } = render(
      <ResponseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReviewScreen />} />
          </Routes>
        </BrowserRouter>
      </ResponseProvider>
    );
    const rateElements = container.querySelectorAll("a[href]");
    expect(rateElements.length).toEqual(25);
  });
});
