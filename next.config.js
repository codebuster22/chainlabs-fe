const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({
	webpack(config) {
		config.module.rules.push({
			test: /\.(jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		domains: ['ik.imagekit.io', 'images.ctfassets.net'],
	},
});
