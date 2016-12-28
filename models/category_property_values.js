/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CategoryPropertyValue', {
    cate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    prop_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    value_ids: {
      type: DataTypes.STRING,
      allowNull: true
    },
    value_text: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'category_property_values',
    timestamps: false
  });
};
