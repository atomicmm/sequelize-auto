/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PropertyValue', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prop_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    prop_value: {
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'property_values',
    timestamps: false
  });
};
