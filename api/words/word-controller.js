import { db } from "../../db/db.js";

export class WordController {
    async words(req, res) {

        const query = 'SELECT * FROM words WHERE wordTypeId=?';
        const values = +req.params.id;

        db.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            }

            res.send(result);
        });
    }
}
