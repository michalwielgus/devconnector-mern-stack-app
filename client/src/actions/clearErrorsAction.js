import { CLEAR_ERRORS } from "./types";

// Clear errors
const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export default clearErrors;
