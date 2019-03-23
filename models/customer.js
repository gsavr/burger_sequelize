module.exports = function(sequelize, DataTypes) {
    var Customers = sequelize.define("Customers", {
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
    Customers.associate = function(models) {
        // Associating Customers with Burgers
        Customers.hasMany(models.Burgers, {
        });
      };
    return Customers;
  };