import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = props => {
  const selectOptions = props.options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": props.errors
        })}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        {selectOptions}
      </select>
      {props.info && (
        <small className="form-text text-muted">{props.info}</small>
      )}
      {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  errors: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
