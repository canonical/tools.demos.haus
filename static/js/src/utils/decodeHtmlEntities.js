function decodeHtmlEntities(str) {
  return str.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec);
  });
}

export default decodeHtmlEntities;
