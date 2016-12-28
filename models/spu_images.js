/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpuImage', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_uri: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_primary: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    sort_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    spu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'spu_images',
    timestamps: false
  });
};
