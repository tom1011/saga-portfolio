CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" FROM "projects" JOIN "tags" ON "tags"."id" = "projects"."tag_id";

SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed" FROM "projects";

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") VALUES ('redux-saga-garden','group project with other people the main objection was to make a list that displayed a garden', 'hydrangea.jpeg','https://github.com/lindseymaae/redux-saga-garden' ,'https://github.com/lindseymaae/redux-saga-garden/', '08/03/2019', 1) ;  

INSERT INTO "projects" ("name" ) VALUES ('all null but name');

SELECT "name" FROM "tags";

SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" as "tagsName" FROM "projects" JOIN "tags" ON "tags"."id" = "projects"."tag_id";
