// src\utils\sendResponse.ts
const sendResponse = (res, payload) => {
    const { statusCode, success, message, meta, data } = payload;
    res.status(statusCode).json({
        success,
        message,
        meta,
        data,
    });
};
export default sendResponse;
//# sourceMappingURL=sendResponse.js.map