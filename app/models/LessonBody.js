// ORM:
const { DataTypes } = require('sequelize')
const database = require('#services/db.service')

// Custom error.
const { Err } = require('#factories/errors')

const LessonBody = database.define(
  'LessonBody',
  {
    body: {
      type: DataTypes.STRING,
      required: false,
      allowNull: true,
      unique: false,
      defaultValue: 'Lesson body...'
    }
  },
  {
    // Enable automatic 'createdAt' and 'updatedAt' fields.
    timestamps: true
  }
)

// Static methods:
LessonBody.associate = (models) => {
  models.LessonBody.belongsTo(models.Lesson, {
    foreignKey: { name: 'lesson_id', allowNull: false }
  })

  models.LessonBody.belongsTo(models.User, {
    foreignKey: { name: 'user_id', allowNull: false }
  })
}

// Instance methods:

module.exports = LessonBody
