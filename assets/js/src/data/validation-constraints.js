export const getValidationConstraints = () => {
	return {
		name: {
			format: {
				pattern: "[a-z0-9]+",
				flags: "i",
				message: "can only contain a-z and 0-9",
			},

			emailAddress: {
				email: true,
			},
		},
	};
};
