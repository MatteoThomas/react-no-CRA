import React from "react";
import { render } from "react-dom";

import Object from "./renderObjectUsingProps";
import Condition from "./conditionalRenderingProps";
import Array from "./arrayDestructuring";
import UseState from "./useState";
import UseEffect from "./useEffect";
render(
  <>
    <Object /> <Condition /> <Array /> <UseState /> <UseEffect />
  </>,
  document.getElementById("root")
);
