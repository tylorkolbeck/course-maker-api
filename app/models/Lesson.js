// ORM:
const { DataTypes } = require('sequelize')
const database = require('#services/db.service')

// Custom error.
const { Err } = require('#factories/errors')

const Lesson = database.define(
  'Lesson',
  {
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      defaultValue: 'New Lesson'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    // Enable automatic 'createdAt' and 'updatedAt' fields.
    timestamps: true
  }
)

// Static methods:

Lesson.associate = (models) => {
  models.Lesson.hasOne(models.LessonBody, {
    foreignKey: { name: 'lesson_id', allowNull: false },
    onDelete: 'CASCADE'
  })
}

// Instance methods:

module.exports = Lesson
