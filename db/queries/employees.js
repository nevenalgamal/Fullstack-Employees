/** @returns the employee created according to the provided details */
import db from "#db/client";

export async function createEmployee({ name, birthday, salary }) {
  // TODO
  const sql = `
  INSERT INTO employees  (name, birthday, salary)
  VALUES ($1, $2, $3)
  RETURNING * 
  `;
  const result = await db.query(sql, [name, birthday, salary]);
  const rows = result.rows;
  const employee = rows[0];
  return employee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  const sql = `
  SELECT * FROM employees 
  `;

  const result = await db.query(sql);
  const rows = result.rows;
  const employees = rows;
  return employees;

}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  const sql = `
  SELECT * FROM employees
  WHERE id = $1
  `;
  const result = await db.query(sql, [id])
  const rows = result.rows
  const employee = rows[0]
  return employee;

}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({name, birthday, salary , id}) {
  // TODO
  const sql = `
  UPDATE employees 
  SET name = $1,
  birthday = $2,
  salary = $3

  WHERE id = $4
  RETURNING *
  `
  ;
  const result = await db.query(sql,[name,birthday, salary, id])
  const rows = result.rows; 
  const employee = rows[0]
  return employee;

}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  const sql = `
  DELETE FROM  employees 

  WHERE id = $1
  RETURNING *
  `
  ;
  const result = await db.query(sql ,[id])
  const rows = result.rows
  const employee = rows[0]
  return employee;
}
