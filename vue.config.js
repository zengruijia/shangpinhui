module.exports = {
  publicPath:'./',
	//不要打包后的map文件
	productionSourceMap: false,
	lintOnSave: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://gmall-h5-api.atguigu.cn',
				// pathRewrite: { '^/api': '' }
				changeOrigin: true,
			},
		},
	},
  
};
