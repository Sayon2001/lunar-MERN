import { db } from "../database/db.js";

export const authUser = (req, res) => {
    const { email, password } = req.body;

    const q = "SELECT * FROM user WHERE email = ? AND password = ?";

    db.query(q, [email, password], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            res.send("Login Successfull");
        } else {
            res.send("Invalid credentials");
        }
    })
}
