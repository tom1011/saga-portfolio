const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/port', (req, res) => {
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed" FROM "projects";`
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
  });


module.exports = router;