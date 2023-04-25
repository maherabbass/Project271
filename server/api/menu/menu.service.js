const conn = require("../../database");

module.exports = {
  createItem: (data, callBack) => {
    console.log(data);
    conn.query(
      `insert into menu(ItemName , ItemType,  price , available_amount, Description_, ImageUrl) values($1,$2,$3,$4,$5, $6)`,

      [
        data.ItemName,

        data.ItemType,

        data.price,

        data.available_amount,

        data.Description_,

        ImageUrl,
      ],

      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  getItems: (callBack) => {
    conn.query(
      `select ItemName, ItemType, price , available_amount, Description_, ImageUrl from menu`,

      [],

      (error, results, field) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  getItemByItemName: (ItemName, callBack) => {
    conn.query(
      `select ItemName , ItemType, price , available_amount , Description_ ,ImageUrl  from menu where ItemName = $1`,

      [ItemName],

      (error, results, field) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results[0]);
      }
    );
  },

  getItemByItemType: (ItemType, callBack) => {
    conn.query(
      `select ItemName , ItemType, price , available_amount, Description_, ImageUrl from menu where ItemType = $1`,

      [ItemType],

      (error, results, field) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  updateItem: (data, callBack) => {
    conn.query(
      `update menu set ItemType = $1, price=$2,  available_amount=$3, Description_ = $4, ImageUrl = $5 where ItemName = $5`,

      [
        data.ItemType,

        data.price,

        data.available_amount,

        data.ItemName,

        data.Description_,

        ImageUrl,
      ],

      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  deleteItem: (data, callBack) => {
    conn.query(
      "delete from menu where ItemName = $1",

      [data.ItemName],

      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results[0]);
      }
    );
  },
};
