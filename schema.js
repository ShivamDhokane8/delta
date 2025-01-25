const Joi = require('joi');

// Schema for Listings
module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),  // Fixed parentheses
        country: Joi.string().required(),  // Fixed parentheses
        price: Joi.number().required().min(0).max(999999), // Changed to number and updated constraints
        image: Joi.string().allow("", null), // Allows empty string or null
    }).required(),
});

// Schema for Reviews
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5), // Ensures rating between 1 and 5
        comment: Joi.string().required(),
    }).required()
});
