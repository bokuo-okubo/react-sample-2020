db.createUser(
  {
      user: "react-user",
      pwd: "passw0rd",
      roles: [
          {
              role: "readWrite",
              db: "react-sample"
          }
      ]
  }
);