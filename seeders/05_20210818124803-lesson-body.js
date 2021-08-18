'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LessonBodies', {})

    await queryInterface.bulkInsert(
      'LessonBodies',
      [
        {
          id: 1,
          body: 'Lesson One Body',
          lesson_id: 1,
          user_id: 1,
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
