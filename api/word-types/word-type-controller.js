import { db } from '../../db/db.js'

export class WordTypeController {
    async wordTypes(req, res) {

        const query = `SELECT * FROM wordTypes`;
        db.query(query, (err, result) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            }

            res.send(result);
        });
    }
}
