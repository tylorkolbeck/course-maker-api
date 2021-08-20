const Section = require('#models/Section')
const coursefacade = require('#facades/course')
const { Err } = require('#factories/errors')

module.exports = {
  addSection: _addSection,
  deleteSection: _deleteSection,
  findOneSectionForUser: _findOneSectionForUser
}

async function _findOneSectionForUser(sectionId, userId) {
  try {
    const section = await Section.findOne({
      where: {
        user_id: userId,
        id: sectionId
      }
    })

    return Promise.resolve(section)
  } catch (error) {
    return Promise.reject(error)
  }
}

async function _deleteSection(userId, sectionId) {
  try {
    await Section.destroy({
      where: {
        user_id: userId,
        id: sectionId
      }
    })
    return Promise.resolve({ sectionId })
  } catch (error) {
    return Promise.reject(error)
  }
}

async function _addSection({ course_id, title, user_id }) {
  try {
    const course = await coursefacade.getCourse(course_id, user_id)
    console.log(course_id, user_id)
    // console.log(course)

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
          title: title ? title : 'New Section',
          user_id: user_id
        },
        ['order', 'course_id']
      )
      return Promise.resolve(section)
    }
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
