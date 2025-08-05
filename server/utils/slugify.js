// utils/slugify.js
const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-'); // space/special chars → dash
  };
  
  module.exports = slugify;
  