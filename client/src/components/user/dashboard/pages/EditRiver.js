import React, { useState } from "react";
import PropTypes from "prop-types";
import CreateAndEditFields from "../components/CreateAndEditFields";
import Form from "react-bootstrap/Form";
import EditSection from "./EditSection";

const EditRiver = ({ config, values }) => {
  const [riverIndex, setRiverIndex] = useState(null);
  const [next, setNext] = useState(true);

  const fieldProps = Object.entries(config).map(([key, value]) => {
    return { name: key, placeholder: key, renderField: value.renderField };
  });

  return (
    <>
      {!next ? (
        <CreateAndEditFields
          values={values}
          topic="River"
          fieldProps={fieldProps}
          index={riverIndex}
          setIndex={setRiverIndex}
          setNext={setNext}
        />
      ) : (
        <EditSection config={config.sections.type[0]} values={values[0].sections}/>
      )}
    </>
  );
};

EditRiver.propTypes = {};

export default EditRiver;
