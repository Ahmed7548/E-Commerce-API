const ajvInstance = require("../ejv-instance");

//{ title, brand, category,gender, price, rating, sort, skip, limit }
const schema = {
	type: "object",
	additionalProperties: false,
	properties: {
		title: {
			type: "string",
			format: "alph-numeric",
		},
		brand: {
			type: "string",
			format: "objectId",
		},
		category: {
			type: "string",
			format: "objectId",
		},
		gender: {
			type: "string",
			enum: ["MALE", "FEMALE", "UNISEX"],
		},
		ageGroup: {
			type: "string",
			enum: ["ADULT", "CHILD"],
		},
		price: {
			type: "object",
			properties: {
				gt: {
					type: "number",
					format: "positive-number",
				},
				lt: {
					type: "number",
					format: "positive-number",
				},
			},
		},
		rating: {
			type: "number",
			format: "five-star-rating",
		},
		sort: {
			type: "number",
			enum: [1, -1],
		},
		skip: {
			type: "number",
			format: "five-star-rating",
		},
		limit: {
			type: "number",
			format: "five-star-rating",
		},
	},
};

module.exports = ajvInstance.compile(schema);
