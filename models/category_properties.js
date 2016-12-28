/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CategoryProperty', {
    cate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    prop_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    is_needed: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_multipile: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_sku: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    sort_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'category_properties',
    timestamps: false
  });
};
