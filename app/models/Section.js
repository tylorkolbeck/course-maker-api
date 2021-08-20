// ORM:
const { DataTypes } = require('sequelize')
const database = require('#services/db.service')

// Custom error.
const { Err } = require('#factories/errors')

const Section = database.define(
  'Section',
  {
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: false
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
Section.associate = (models) => {
  models.Section.hasMany(models.Lesson, {
    foreignKey: { name: 'section_id', allowNull: false },
    as: 'lessons'
  })

  models.Section.belongsTo(models.User, {
    foreignKey: { name: 'user_id', allowNull: false }
  })
}

// Instance methods:

module.exports = Section
