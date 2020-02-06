const { errorType } = require('../constants');

const getErrorCode = errorName => {
  if (errorType[errorName]) {
    return errorType[errorName];
  } else {
    console.log("not found error"+errorName);
    return {
      message: errorName,
      statusCode: 404
    }
  }
}

module.exports = getErrorCode;