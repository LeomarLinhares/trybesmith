export default {
  CREATE_USER: `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`,
  GET_BY_USERNAME_AND_PASS: `SELECT id, username FROM Trybesmith.Users
    WHERE username = ? AND password = ?`,
};
