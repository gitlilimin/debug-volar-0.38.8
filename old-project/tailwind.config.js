module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	plugins: [],
	corePlugins: {
		preflight:false,
	},
	theme: {
		extend: {
			colors: {
				primary: '#00b5d5',
			},
			spacing: {},
			maxWidth: {
				// 主要内容最大宽度
				primary: '1120px',
			},
		},
	},
}
