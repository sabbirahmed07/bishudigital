const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.university = !isEmpty(data.university) ? data.university : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.university)) {
    errors.university = "University is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree is required";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
