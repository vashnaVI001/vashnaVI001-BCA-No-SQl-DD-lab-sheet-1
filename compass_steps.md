# MongoDB Compass — Practical Steps (Tasks 22–23)

1. Open MongoDB Compass and connect to your MongoDB instance (for a local installation, usually `mongodb://localhost:27017`).
2. Create or open the `StudentDB` database. Create the `Students`, `Faculty`, and `Courses` collections.
3. In `Students`, choose **Add Data → Insert Document** and insert a student document, for example:
   ```json
   {
     "RollNumber": 301,
     "Name": "Ishita Rana",
     "Department": "Computer Science",
     "Semester": 5,
     "CGPA": 8.3
   }
   ```
4. Use **Add Data → Insert Document** again for a single document, or **Import File** for multiple records.
5. To read all documents, open the collection and leave the **Filter** box empty, then click **Find**.
6. To find a specific roll number, enter `{ "RollNumber": 301 }` in **Filter**.
7. To filter by department, enter `{ "Department": "Computer Science" }`.
8. For projection, use the **Project** box: `{ "Name": 1, "Department": 1, "_id": 0 }`.
9. To update a document, select it and click the edit/pencil icon, or use **Update** with a filter and update document such as:
   - Filter: `{ "RollNumber": 301 }`
   - Update: `{ "$set": { "Department": "Data Science" } }`
10. To update many records, use **Update Many** (where available) or the embedded mongosh:
    ```javascript
    db.Students.updateMany(
      { "Department": "Computer Science" },
      { "$set": { "Semester": 6 } }
    )
    ```
11. To delete one or many records, select the document(s) and use **Delete**, or use the embedded shell with `deleteOne()` / `deleteMany()`.
12. To rename or drop a collection, use the collection's context menu. To drop a database, use the database context menu. These operations are destructive—do them only in a practice database.
13. Compare Compass results with the `mongosh` script by checking the same filters, document counts, and updated field values.
14. Take screenshots of the connection, collections list, insert/read/update/delete operations, and final results for your lab record.

**Note:** Compass menus may differ slightly by version. Verify each change before moving to the next task.
