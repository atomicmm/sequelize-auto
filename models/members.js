/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Member', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dtt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    hide: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    account: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qq: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0"
    },
    integral: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    login_ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    login_dtt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    error_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    frozen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'members',
    timestamps: false
  });
};
