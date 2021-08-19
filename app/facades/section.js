const Section = require('#models/Section')
const coursefacade = require('#facades/course')
const { Err } = require('#factories/errors')

module.exports = {
  addSection: _addSection
}

async function _addSection({ course_id, title, user_id }) {
  try {
    const course = await coursefacade.getCourse(course_id, user_id)

    if (!course) {
      const err = new Err('Not authorized')
      throw err
    } else {
      const numberOfSectionsInCourse = await Section.count({
        where: {
          course_id
        }
      })

      const section = await Section.create(
        {
          order: numberOfSectionsInCourse + 1,
          course_id,
          title: title ? title : 'New Section'
        },
        ['order', 'course_id']
      )
      return Promise.resolve(section)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
