const conn = require("../../database");

module.exports = {
  create: (data, callBack) => {
    conn.query(
      `insert into users(id, first_name, last_name, email, password_) values($1, $2, $3, $4, $5)`,
      [data.id, data.first_name, data.last_name, data.email, data.password_],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    conn.query(
      `select id, first_name, last_name, email, password_ from users`,
      [],
      (error, results, field) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    conn.query(
      `select id, first_name, last_name, email, password_ from users where id = $1`,
      [id],
      (error, results, field) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    conn.query(
      `update users set first_name=?, last_name=?, email=?, password_=? where id = $1`,
      [data.first_name, data.last_name, data.email, data.password_, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteUser: (data, callBack) => {
    conn.query(
      "delete from users where id =$1",
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {
    console.log(email);
    conn.query(
      `select * from users where email = $1`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results.rows[0]);
      }
    );
  },
};
