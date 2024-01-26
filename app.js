const Sequelize = require("sequelize");
const express = require("express");
 
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
 
const sequelize = new Sequelize("test", "root", "123", {
    dialect: "postgres"
});
 
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
 
app.set("view engine", "hbs");
 
sequelize.sync().then(()=>{
  app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
  });
}).catch(err=>console.log(err));
 

app.get("/", function(req, res){
    res.render("index.hbs", {
        users: data
    });
});