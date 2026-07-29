/******************************************************************************
 * Utility File : response.js
 * Description  : Standard API Response Functions
 ******************************************************************************/

/**
 * Send Success Response
 */
const successResponse = (res, message, data = null, statusCode = 200) => {

    return res.status(statusCode).json({

        success: true,

        message,

        data

    });

};

/**
 * Send Error Response
 */
const errorResponse = (res, message, statusCode = 400) => {

    return res.status(statusCode).json({

        success: false,

        message

    });

};

module.exports = {

    successResponse,

    errorResponse

};