---
title: "Database"
sidebar: "concepts"
---

Data Models `/core/server/models/`: Access to the database uses bookshelf.js as ORM. Bookshelf enables the use of MySql, SQLite and postgreSQL via the knex query builder. The data models add data (author, created_by, ...) to the data objects that are finally saved to the database. As a rule of thumb, only operations that are related to data that is being stored should be executed within the data models.
