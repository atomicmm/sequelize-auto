/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Property', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prop_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_input: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_enum: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'properties',
    timestamps: false
  });
};
