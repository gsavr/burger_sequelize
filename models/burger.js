module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
    },
    order_name:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  Burgers.associate = function(models) {
    Burgers.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Burgers;
};