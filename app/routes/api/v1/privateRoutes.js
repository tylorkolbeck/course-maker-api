module.exports = {
  'GET /users/name': 'UsersController.getFullName',
  'GET /courses': 'CoursesController.getCourses',
  'GET /courses/:id': 'CoursesController.getCourse',
  'POST /sections': 'SectionsController.addSection',
  'DELETE /sections/:id': 'SectionsController.deleteSection'
}
