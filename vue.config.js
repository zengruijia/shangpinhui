module.exports = {
	lintOnSave: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://gmall-h5-api.atguigu.cn',
				// pathRewrite: { '^/api': '' }
				changeOrigin: true
			}
		}
	}
};
