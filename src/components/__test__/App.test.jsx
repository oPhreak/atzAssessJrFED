import React, {useState} from "react";
import ReactDOM from "react-dom";
import { isTSAnyKeyword } from "@babel/types";
import Button from '@mui/material/Button';

import App from "../App";
import RenderPanels from "../RenderPanels";
import products from "../../products";
import Header from "../Header";
import Footer from "../Footer";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
})