// Lab Sheet 1 — NoSQL Database Design (MongoDB)
// Run with: mongosh "mongodb://localhost:27017" --file lab_sheet_1.js
// Use only on a practice database. Destructive tasks are included as required by the lab sheet.

print("\n=== 1. Create/select StudentDB and verify ===");
db = db.getSiblingDB("StudentDB");
print("Current database: " + db.getName());
printjson(db.adminCommand({ listDatabases: 1, nameOnly: true }).databases.filter(x => x.name === "StudentDB"));

print("\n=== 2. Create Students, Faculty, Courses collections ===");
for (const name of ["Students", "Faculty", "Courses"]) {
  if (!db.getCollectionNames().includes(name)) db.createCollection(name);
}
printjson(db.getCollectionNames());

print("\n=== 3. Insert one student document ===");
db.Students.insertOne({
  RollNumber: 101, Name: "Aarav Sharma", Department: "Computer Science",
  Semester: 5, CGPA: 8.4
});
printjson(db.Students.findOne({ RollNumber: 101 }));

print("\n=== 4. Insert multiple student documents ===");
db.Students.insertMany([
  { RollNumber: 102, Name: "Priya Verma", Department: "Information Technology", Semester: 5, CGPA: 8.8 },
  { RollNumber: 103, Name: "Rohan Singh", Department: "Computer Science", Semester: 3, CGPA: 7.9 },
  { RollNumber: 104, Name: "Meera Gupta", Department: "Commerce", Semester: 5, CGPA: 8.1 },
  { RollNumber: 105, Name: "Kabir Malik", Department: "Computer Science", Semester: 1, CGPA: 7.6 }
]);
print("Student count after insertMany: " + db.Students.countDocuments());

print("\n=== 5. Retrieve all student documents ===");
printjson(db.Students.find({}).toArray());

print("\n=== 6. Find one student by RollNumber ===");
printjson(db.Students.findOne({ RollNumber: 103 }));

print("\n=== 7. Find students in Computer Science ===");
printjson(db.Students.find({ Department: "Computer Science" }).toArray());

print("\n=== 8. Projection: show only Name and Department ===");
// _id is excluded for a cleaner projection.
printjson(db.Students.find({}, { _id: 0, Name: 1, Department: 1 }).toArray());

print("\n=== 9. updateOne: change department for RollNumber 104 ===");
printjson(db.Students.updateOne(
  { RollNumber: 104 },
  { $set: { Department: "Business Administration" } }
));
printjson(db.Students.findOne({ RollNumber: 104 }));

print("\n=== 10. updateMany: set semester 6 for Computer Science students ===");
printjson(db.Students.updateMany(
  { Department: "Computer Science" },
  { $set: { Semester: 6 } }
));
printjson(db.Students.find({ Department: "Computer Science" }).toArray());

print("\n=== 11. replaceOne: replace RollNumber 105 document ===");
printjson(db.Students.replaceOne(
  { RollNumber: 105 },
  { RollNumber: 105, Name: "Kabir Malik", Department: "Data Science", Semester: 1, CGPA: 7.7 }
));
printjson(db.Students.findOne({ RollNumber: 105 }));

print("\n=== 12. Add Email field to all students ===");
printjson(db.Students.updateMany(
  {},
  [{ $set: { Email: { $concat: [{ $toLower: "$Name" }, "@example.com"] } } }]
));
printjson(db.Students.find({}, { _id: 0, Name: 1, Email: 1 }).toArray());

print("\n=== 13. Remove CGPA field from all students ===");
printjson(db.Students.updateMany({}, { $unset: { CGPA: "" } }));
printjson(db.Students.find({}, { _id: 0, Name: 1, CGPA: 1 }).toArray());

print("\n=== 14. deleteOne: delete RollNumber 104 ===");
printjson(db.Students.deleteOne({ RollNumber: 104 }));
print("Remaining count: " + db.Students.countDocuments());

print("\n=== 15. deleteMany: delete students in Semester 6 ===");
// This removes the Computer Science sample records updated in practical 10.
printjson(db.Students.deleteMany({ Semester: 6 }));
print("Remaining documents:");
printjson(db.Students.find({}).toArray());

print("\n=== 16. Count total documents ===");
print("Total student documents: " + db.Students.countDocuments());

print("\n=== 17. Rename Students to StudentDetails ===");
if (db.getCollectionNames().includes("Students")) {
  db.Students.renameCollection("StudentDetails", true);
}
printjson(db.getCollectionNames());
print("StudentDetails count: " + db.StudentDetails.countDocuments());

print("\n=== 18. Create Departments and insert sample information ===");
if (!db.getCollectionNames().includes("Departments")) db.createCollection("Departments");
db.Departments.insertMany([
  { DepartmentID: "CS", DepartmentName: "Computer Science", HOD: "Dr. Sharma" },
  { DepartmentID: "IT", DepartmentName: "Information Technology", HOD: "Dr. Verma" },
  { DepartmentID: "DS", DepartmentName: "Data Science", HOD: "Dr. Khan" }
]);
printjson(db.Departments.find({}).toArray());

print("\n=== 19. Drop Departments collection and verify ===");
print("Drop result: " + db.Departments.drop());
print("Departments exists: " + db.getCollectionNames().includes("Departments"));

print("\n=== 20. Drop StudentDB database and confirm removal ===");
const databaseName = db.getName();
print("Before drop, collections: " + db.getCollectionNames().join(", "));
print("Drop database result:");
printjson(db.dropDatabase());
print("Database listing after drop:");
printjson(db.getSiblingDB("admin").runCommand({ listDatabases: 1, nameOnly: true }).databases.map(x => x.name));

print("\n=== 21. Recreate StudentDB and insert sample data ===");
db = db.getSiblingDB("StudentDB");
db.StudentDetails.insertMany([
  { RollNumber: 201, Name: "Ananya Joshi", Department: "Computer Science", Semester: 5, CGPA: 8.6 },
  { RollNumber: 202, Name: "Vivek Kumar", Department: "Information Technology", Semester: 3, CGPA: 8.0 }
]);
print("Recreated database: " + db.getName());
printjson(db.StudentDetails.find({}).toArray());

print("\n=== 22–23. MongoDB Compass ===");
print("Follow compass_steps.md for GUI CRUD and database/collection management.");
print("\n=== 24. MongoDB vs SQL ===");
print("See sql_comparison.md.");
print("\n=== 25. Lab report ===");
print("Use lab_report_template.md and insert your actual outputs/screenshots.");
print("\nLab Sheet 1 script completed.");
