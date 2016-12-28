/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShoppingPackage', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0"
    },
    sku_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0"
    },
    sku_offers: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0"
    },
    freight_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0"
    },
    freight_offers: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0"
    },
    order_offers: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'shopping_packages',
    timestamps: false
  });
};
