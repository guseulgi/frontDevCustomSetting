import "../style.css";
import "../style2.css";

import testImg from "../images/망곰.jpeg";

const body = document.querySelector("body");
body.innerHTML = "<h1>테스팅~~~~~</h1>\n" + `<img src=${testImg}></img>`;
