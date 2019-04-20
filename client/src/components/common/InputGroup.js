import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = props => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={props.icon} />
        </span>
      </div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": props.errors
        })}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  type: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
