import React from "react";

import FormPreview from "../components/FormPreview";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
function RootScreen(props) {
  return (
    <div className="RootScreen">
      {props.count === 0 && (
        <Screen1
          count={props.count}
          setCount={props.setCount}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      )}
      {props.count === 1 && (
        <Screen2
          count={props.count}
          setCount={props.setCount}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      )}
      {props.count === 2 && (
        <Screen3
          count={props.count}
          setCount={props.setCount}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      )}
      {props.count === 3 && (
        <Screen4
          count={props.count}
          setCount={props.setCount}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      )}
      {props.count >= 4 && (
        <Screen5
          count={props.count}
          setCount={props.setCount}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      )}
      {props.count < 3 && (
        <FormPreview
          formData={props.formData}
          setFormData={props.setFormData}
        />
      )}
    </div>
  );
}

export default RootScreen;
