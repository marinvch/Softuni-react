import React, { createContext, useReducer, useState } from "react";
import AddRecuder from "./AppReducer";
import { url } from "../Api/index";
import axios from "axios";

const data = async () => {
  await axios.get(`${url}/posts`).then((res) => {
    initialState = res.data;
  });
};

//Initial State
const initialState = {};
