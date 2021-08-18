module.exports = CoursesController

function CoursesController() {
  _getCourses = (req, res) => {
    res.send({
      message: 'hello'
    })
  }

  return {
    getCourses: _getCourses
  }
}
