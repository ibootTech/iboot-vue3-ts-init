/*
 * @descripttion: babel config
 * @author: luohong
 * @Date: 2021-06-21
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]]
};
