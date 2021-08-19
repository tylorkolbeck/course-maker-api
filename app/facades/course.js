const Course = require('#models/Course')
const Section = require('#models/Section')
const Lesson = require('#models/Lesson')

const { Err } = require('#factories/errors')

module.exports = {
  getCourses: _getCourses,
  getCourse: _getCourse
}

async function _getCourses({ userId }) {
  try {
    const courses = await Course.findAll({
      where: {
        user_id: userId
      }
    })

    return Promise.resolve(courses)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

async function _getCourse(courseId, user_id) {
  try {
    const course = await Course.findOne({
      where: {
        id: courseId,
        user_id: user_id
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

    return Promise.resolve(course)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
