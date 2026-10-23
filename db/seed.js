import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO

  for (let i =0; i<10; i++){
    await createEmployee({
      name: "neven" + i,
      birthday :"1990-02-08",
      salary: 200000,
    });
  }
}


