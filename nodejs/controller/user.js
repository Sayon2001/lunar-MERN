
export const getUser = (req, res) => {
    // const {role} = req.body;
    const role = 'admin';
    if (role === 'admin') {
        next();
    } else {
        res.send("Unauthorized")
    }
}