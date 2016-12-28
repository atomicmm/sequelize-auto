/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderItem', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    sku_snapshot: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    evaluation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    form_data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'order_items',
    timestamps: false
  });
};
