const H5ENV = (callback) => {
  // #ifdef H5
  callback();
  // #endif
};

const NotH5 = (callback) => {
  // #ifndef H5
  callback();
  // #endif
};

export { H5ENV, NotH5 };
