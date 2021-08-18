'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Lessons', {})

    await queryInterface.bulkInsert(
      'Lessons',
      [
        {
          id: 1,
          title: 'Lesson One',
          section_id: 1,
          order: 1,
          body: 'New lesson....',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          title: 'Lesson Two',
          section_id: 1,
          order: 2,
          body: 'New lesson....',
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
