module.exports = {
  //  '@vue/cli-plugin-babel/preset'
  "presets": [["@babel/preset-env", { "modules": false }], '@vue/babel-preset-jsx'],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      },
      "transform-vue-jsx"
    ]
  ]
};
