import React from "react";
import ReactDom from "react-dom";
import { addRouter, setHistoryOptions, startHistory } from "path-router-web";
import axios from "axios";
import cookies from "js-cookie";
import { mainRouter } from "./routers/mainRouter";
import { AppView } from "./views/AppView";

setHistoryOptions({
  baseUrl: "/"
});

const token = cookies.get("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `OAuth ${token}`;
}

addRouter(mainRouter);
startHistory();

// Remove loading
const style = window.document.createElement("style");
style.innerText = "body:after{display:none;}";
window.document.querySelector("head").appendChild(style);

ReactDom.render(<AppView />, document.querySelector('.app'));
