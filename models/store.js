/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Store', {
    sku_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    store_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'store',
    timestamps: false
  });
};
