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
    },
    body: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Start lesson content...'
    }
  },
  {
    // Enable automatic 'createdAt' and 'updatedAt' fields.
    timestamps: true
  }
)

// Static methods:

Lesson.associate = (models) => {}

// Instance methods:

module.exports = Lesson
