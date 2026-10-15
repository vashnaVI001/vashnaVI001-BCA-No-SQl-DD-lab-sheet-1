# Lab Sheet 1 — NoSQL Database Design (MongoDB)

This repository contains MongoDB Shell (`mongosh`) scripts for the 25 practicals in `Lab_Sheet_1.pdf`.

## Requirements
- MongoDB Community Edition running locally or remotely
- MongoDB Shell (`mongosh`)
- Optional: MongoDB Compass for the GUI practical

## Run
From a terminal connected to your MongoDB server:

```bash
mongosh "mongodb://localhost:27017" --file lab_sheet_1.js
```

Or open `lab_sheet_1.js` in MongoDB Compass's embedded shell / paste sections into `mongosh`.

## Important
- The script uses the database `StudentDB` and sample data.
- Practical 15 deletes matching documents; practical 17 renames a collection; practicals 19–20 drop a collection/database. These are intentionally included because the lab sheet asks for them.
- Run this only in a practice environment. The script recreates sample data where needed so later tasks can be demonstrated.
- The shell script prints the commands' results; capture your own screenshots after running it for the lab report.
- Practical 22–23 require GUI actions in MongoDB Compass, so instructions are in `compass_steps.md`.
- Practical 24's SQL comparison is in `sql_comparison.md`.
- Practical 25 report template is in `lab_report_template.md`.

## Files
- `lab_sheet_1.js` — MongoDB Shell commands for database/collection creation, CRUD, projections, updates, deletes, counting, rename/drop/recreate.
- `compass_steps.md` — GUI steps for Compass practicals.
- `sql_comparison.md` — MongoDB vs SQL comparison.
- `lab_report_template.md` — report structure to complete with your actual outputs and screenshots.
