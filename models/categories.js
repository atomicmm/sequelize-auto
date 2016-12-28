/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    super_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sort_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'categories',
    timestamps: false
  });
};
