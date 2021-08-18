const Course = require('#models/Course')
const Section = require('#models/Section')
const Lesson = require('#models/Lesson')

const { Err } = require('#factories/errors')

module.exports = {
  getCourses: _getCourses
}

async function _getCourses({ userId }) {
  try {
    const courses = await Course.findAll({
      where: {
        user_id: userId
      },
      include: {
        model: Section,
        as: 'sections',
        include: {
          model: Lesson,
          as: 'lessons'
        }
      }
    })

    // Add lesson body as another model to associate

    return Promise.resolve(courses)
  } catch (error) {
    console.log(error)
  }
}
