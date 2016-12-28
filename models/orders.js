/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ip_area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    hide: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    business: {
      type: DataTypes.STRING,
      allowNull: true
    },
    business_title: {
      type: DataTypes.STRING,
      allowNull: true
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
    },
    pay_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    pay_type: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pay_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    master: {
      type: DataTypes.STRING,
      allowNull: true
    },
    express_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    express_provider: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'orders',
    timestamps: false
  });
};
