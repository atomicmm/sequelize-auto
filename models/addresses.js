/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    address_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    super_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'addresses',
    timestamps: false
  });
};
