# MongoDB CRUD vs SQL — Practical 24

| Task | MongoDB (`mongosh`) | SQL (illustrative) |
|---|---|---|
| Create database | `use StudentDB` (database is persisted when data is written) | `CREATE DATABASE StudentDB;` |
| Create collection/table | `db.createCollection("Students")` | `CREATE TABLE Students (...);` |
| Insert one | `db.Students.insertOne({RollNumber: 101, Name: "Aarav"})` | `INSERT INTO Students (RollNumber, Name) VALUES (101, 'Aarav');` |
| Insert multiple | `db.Students.insertMany([{...}, {...}])` | Multiple `INSERT` rows or one multi-row `INSERT` |
| Read all | `db.Students.find({})` | `SELECT * FROM Students;` |
| Filter | `db.Students.find({Department: "Computer Science"})` | `SELECT * FROM Students WHERE Department = 'Computer Science';` |
| Projection | `db.Students.find({}, {Name: 1, Department: 1, _id: 0})` | `SELECT Name, Department FROM Students;` |
| Update one | `db.Students.updateOne({RollNumber: 101}, {$set: {Department: "IT"}})` | `UPDATE Students SET Department = 'IT' WHERE RollNumber = 101;` |
| Update many | `db.Students.updateMany({Department: "IT"}, {$set: {Semester: 6}})` | `UPDATE Students SET Semester = 6 WHERE Department = 'IT';` |
| Delete one | `db.Students.deleteOne({RollNumber: 101})` | `DELETE FROM Students WHERE RollNumber = 101;` |
| Delete many | `db.Students.deleteMany({Semester: 6})` | `DELETE FROM Students WHERE Semester = 6;` |
| Count | `db.Students.countDocuments({})` | `SELECT COUNT(*) FROM Students;` |
| Remove collection | `db.Students.drop()` | `DROP TABLE Students;` |
| Remove database | `db.dropDatabase()` | `DROP DATABASE StudentDB;` |

## Main differences

- **Data model:** MongoDB stores BSON documents in collections; relational SQL databases store rows in tables with defined schemas.
- **Schema:** MongoDB documents in a collection can have different fields; SQL tables generally enforce column definitions and constraints.
- **Relationships:** SQL commonly models relationships with foreign keys and joins. MongoDB can embed related data or reference documents; joins are possible with aggregation (`$lookup`).
- **Queries:** MongoDB uses JSON-like filter/update documents and aggregation pipelines; SQL uses declarative SQL statements.
- **Transactions and consistency:** Both modern MongoDB and relational systems support transactions, though implementation and modeling patterns differ.
- **Best fit:** The choice depends on query patterns, data relationships, integrity requirements, scale, and operational needs—not on one database being universally better.
