export const ageVerfication = (req, res, next) => {
    const { age } = req.body;
    if (age >= 18) {
        next();
    } else {
        res.send({ message: "You are not ready for russian bang bang" })
    }
}