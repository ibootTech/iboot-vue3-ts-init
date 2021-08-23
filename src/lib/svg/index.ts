/*
 * @descripttion: 
 * @author: luohong
 * @Date: 2021-06-21
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
const svgFiles = require.context('@/app', true, /\.svg$/)
svgFiles.keys().filter(key => {
  return key.includes('/svg')
})
requireAll(svgFiles)
