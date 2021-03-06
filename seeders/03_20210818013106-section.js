'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sections', {})

    await queryInterface.bulkInsert(
      'Sections',
      [
        {
          id: 1,
          title: 'Section One',
          course_id: 1,
          user_id: 1,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          title: 'Section Two',
          user_id: 1,
          course_id: 1,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          title: 'Section Two',
          user_id: 2,
          course_id: 2,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
