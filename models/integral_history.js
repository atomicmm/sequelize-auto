/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IntegralHistory', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    integral_change: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    integral: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'integral_history',
    timestamps: false
  });
};
