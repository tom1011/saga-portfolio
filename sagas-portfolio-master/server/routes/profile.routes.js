const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/port', (req, res) => {
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed" FROM "projects";`
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT port query', err);
        res.sendStatus(500);
      });
  });


  router.delete('/:id', (req, res) => {
      console.log('in delete')
    const queryText = 'DELETE FROM "projects" WHERE id=$1';
    pool.query(queryText, [(req.params.id)])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;