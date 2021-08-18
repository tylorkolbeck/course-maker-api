// ORM:
const { DataTypes } = require('sequelize')
const database = require('#services/db.service')

// Custom error.
const { Err } = require('#factories/errors')

const Course = database.define(
  'Course',
  {
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: false
    }
  },
  {
    // Enable automatic 'createdAt' and 'updatedAt' fields.
    timestamps: true
  }
)

// Static methods:
// Course.associate = models => {
// 	models.DisabledRefreshToken.belongsTo(models.User, {
// 		foreignKey: "UserId",
// 		as: 'user'
// 	});
// }

Course.associate = (models) => {}

// Instance methods:

module.exports = Course
