import { db } from "../../db/db.js"

export class SentencesController {

    async sentences(req, res) {

        const query = 'SELECT * FROM sentences';

        db.query(query, (err, result) => {
            if (err) {
                console.error(err);
                res.send(err);
            }
            res.send(result);
        });
    }

    async create(req, res) {

        const query = `INSERT INTO sentences (sentence) VALUES (?)`;
        let values = req.body.value;

        db.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            }
            res.send();
        });
    }

}
