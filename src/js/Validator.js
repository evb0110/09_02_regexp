class Validator {
  static validateUsername(str) {
    const regexY = /^\s?[a-zA-ZА-Яа-я -]+\s?$/u;
    const regexN = /  +|^ | $/;

    return regexY.test(str) && !regexN.test(str);
  }
}

// export default Validator;

console.log(Validator.validateUsername('hello world'));
