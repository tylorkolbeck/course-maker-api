const courseFacade = require('#facades/course')

module.exports = CoursesController

function CoursesController() {
  _getCourses = async (req, res) => {
    const courses = await courseFacade.getCourses({ userId: req.token.id })

    res.send({
      user: req.token.id,
      courses: courses
    })
  }

  return {
    getCourses: _getCourses
  }
}
