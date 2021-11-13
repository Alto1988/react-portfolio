import React from "react";
import { hot } from "react-hot-loader/root";
import { Navigation } from "./components/Navigation";

export const App = hot(_App);

export default function _App() {
  return (
    <div>
      <Navigation />
    </div>
  );
}
