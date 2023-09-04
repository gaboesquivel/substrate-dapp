module.exports = {
  root: true,
  extends: ["eslint-custom" ],
  settings: {
    next: { //TODO: update to work with preactjs
      rootDir: ["dapps/*/"],
    },
  },
};
