const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle should be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "You must provide us with at least one skill.";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not valid URL";
    }
  }

  if (!isEmpty(data.social.youtube)) {
    if (!Validator.isURL(data.social.youtube)) {
      errors.youtube = "Not valid URL";
    }
  }

  if (!isEmpty(data.social.twitter)) {
    if (!Validator.isURL(data.social.twitter)) {
      errors.twitter = "Not valid URL";
    }
  }

  if (!isEmpty(data.social.facebook)) {
    if (!Validator.isURL(data.social.facebook)) {
      errors.facebook = "Not valid URL";
    }
  }

  if (!isEmpty(data.social.linkedin)) {
    if (!Validator.isURL(data.social.linkedin)) {
      errors.linkedin = "Not valid URL";
    }
  }

  if (!isEmpty(data.social.instagram)) {
    if (!Validator.isURL(data.social.instagram)) {
      errors.instagram = "Not valid URL";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
