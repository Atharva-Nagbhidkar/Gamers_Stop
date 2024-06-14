const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body); // Checks if data filled matches the schema
        req.body = parseBody; // assigned parseBody to req.body
        next(); 

    } catch (err) {
        const status = 420;
        const message = "Fill the input properly";
        const extraDetails = err.errors[0].message;
        const error={
            status,
            message,
            extraDetails,
        }
        console.log(error);
        next(error);
    }
}

module.exports = validate;