import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewScreen from "../screens/ReviewScreen";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReviewScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
