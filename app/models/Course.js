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
    },
    public: {
      type: DataTypes.BOOLEAN,
      required: true,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    // Enable automatic 'createdAt' and 'updatedAt' fields.
    timestamps: true
  }
)

// Static methods:
Course.associate = (models) => {
  models.Course.belongsTo(models.User, {
    foreignKey: { name: 'user_id', allowNull: false },
    as: 'user'
  })

  models.Course.hasMany(models.Section, {
    foreignKey: { name: 'course_id', allowNull: false },
    as: 'sections'
  })
}

// Instance methods:

module.exports = Course
