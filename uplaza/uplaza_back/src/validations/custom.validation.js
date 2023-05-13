const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('رمز عبور نمیتواند کمتر از 8 کاراکتر باشد');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('رمز عبور باید شامل،حروف بزرگ،حروف کوچک،اعداد و سمبل ها باشد');
  }
  return value;
};
const email = (value, helpers) => {
  if (!value.match(/\S+@\S+\.\S+/)) {
    return helpers.message('فرمت ایمیل نادرست است');
  }
  return value;
};

module.exports = {
  objectId,
  password,
  email
};
