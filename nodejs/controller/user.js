import { db } from "../database/db.js";

// export const getUser = (req, res) => {
//     // const {role} = req.body;
//     const role = 'admin';
//     if (role === 'admin') {
//         next();
//     } else {
//         res.send("Unauthorized")
//     }
// }

export const insertUser = (req, res) => {
    const { name, email, password, role, age } = req.body;

    const q = "INSERT INTO user (name, email, password,role,age) VALUES (?, ?, ?,?,?)";

    db.query(q, [name, email, password, role, age], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
}

export const getUser = (req, res) => {
    const q = "SELECT * FROM user";

    db.query(q, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
}