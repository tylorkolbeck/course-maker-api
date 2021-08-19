const courseFacade = require('#facades/course')
const {
  createOKResponse,
  createErrorResponse
} = require('#factories/responses/api')

module.exports = CoursesController

function CoursesController() {
  _getCourses = async (req, res) => {
    try {
      const courses = await courseFacade.getCourses({ userId: req.token.id })

      createOKResponse({
        res,
        content: {
          courses
        }
      })
    } catch (error) {
      console.error('CoursesController._getCourses error: ', error)
      return createErrorResponse({
        res,
        error: {
          message: 'Unknown error'
        },
        status: 500
      })
    }
  }

  _getCourse = async (req, res) => {
    try {
      const courseId = req.params['id']
      const course = await courseFacade.getCourse(courseId, req.token.id)

      createOKResponse({
        res,
        content: {
          course
        }
      })
    } catch (error) {
      return createErrorResponse({
        res,
        error: {
          message: 'Unknown error'
        },
        status: 500
      })
    }
  }

  return {
    getCourses: _getCourses,
    getCourse: _getCourse
  }
}
