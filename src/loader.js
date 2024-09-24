// background/loader.js

const customLoader = ({ src, width, quality = 75 }) => {
  // The src should be relative to the public folder
  return `/background/${src}?w=${width}&q=${quality}`;
};

export default customLoader;
