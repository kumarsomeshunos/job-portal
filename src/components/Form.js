import React from "react";
import FormMerger from "./Form/FormMerger";

const Form = (props) => {
  return (
    <div>
      {props.disabled ? (
        <fieldset disabled="disabled">
          <FormMerger data={props.data} />
        </fieldset>
      ) : (
        <FormMerger />
      )}
    </div>
  );
};

export default Form;
