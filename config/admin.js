module.exports = ({ env }) => ({
	url: "/admin",
	serveAdminPanel: true,
	auth: {
		secret: env("ADMIN_JWT_SECRET"),
	},
	apiToken: {
		salt: env("API_TOKEN_SALT"),
	},
});
