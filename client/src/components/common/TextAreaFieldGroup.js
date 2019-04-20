import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const textAreaFieldGroup = props => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": props.errors
        })}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.info && (
        <small className="form-text text-muted">{props.info}</small>
      )}
      {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
  );
};

textAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default textAreaFieldGroup;
