class Validator {
  static validateUsername(str) {
    const regexYes = /^[a-zA-ZА-Яа-я -]+$/u;
    const regexNo = /  +|^ | $/;

    return regexYes.test(str) && !regexNo.test(str);
  }
}

export default Validator;
