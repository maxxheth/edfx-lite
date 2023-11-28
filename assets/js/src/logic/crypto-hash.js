const dec2hex = (dec) => ("0" + dec.toString(16)).substr(-2);

// generateId :: Integer -> String
export const generateHashId = (len) => {
	var arr = new Uint8Array((len || 40) / 2);

	window.crypto.getRandomValues(arr);

	return Array.from(arr, dec2hex).join("");
};
