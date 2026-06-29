// src\middlewares\validateRequest.ts
const validateRequest = (schema) => {
    return async (req, _res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                params: req.params,
                query: req.query,
                cookies: req.cookies,
                headers: req.headers,
            });
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
export default validateRequest;
//# sourceMappingURL=validateRequest.js.map