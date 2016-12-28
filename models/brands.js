/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Brand', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    official_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    story: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'brands',
    timestamps: false
  });
};
