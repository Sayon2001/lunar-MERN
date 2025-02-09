export const test = (req, res, next) => {
    res.send("This is test middleware");
    next();
}