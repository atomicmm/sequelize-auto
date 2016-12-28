/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShoppingCart', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sku_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    buy_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1"
    },
    member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    identity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'shopping_cart',
    timestamps: false
  });
};
