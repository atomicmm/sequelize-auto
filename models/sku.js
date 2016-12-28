/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sku', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    spu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cate_prop_values: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sku_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sku_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    original_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    selling_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discount_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'sku',
    timestamps: false
  });
};
