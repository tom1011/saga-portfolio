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

  router.get('/tags', (req, res) => {
    const queryText = `SELECT "name" FROM "tags";`
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

  router.post('/', (req, res) => {
    const updatedport = req.body;
    const queryText = `INSERT INTO "projects" ("name",
     "description",
      "thumbnail", 
      "website", 
      "github", 
      "date_completed" ) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      const queryValues = [
        updatedport.name,
        updatedport.description,
        updatedport.image,
        updatedport.urlWebsite,
        updatedport.gitHub,
        updatedport.date,];
        pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
    });
  })

module.exports = router;