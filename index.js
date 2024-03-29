function toUpperCase(inputString) {
  if (typeof inputString !== "string") {
    throw new TypeError("input must be a string");
  }

  return inputString.toUpperCase();
}

module.exports = toUpperCase;
