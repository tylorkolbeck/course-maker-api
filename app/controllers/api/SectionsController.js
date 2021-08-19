const sectionFacade = require('#facades/section')
const {
  createOKResponse,
  createErrorResponse
} = require('#factories/responses/api')

module.exports = SectionsController

function SectionsController() {
  _addSection = async (req, res) => {
    try {
      const section = await sectionFacade.addSection({
        course_id: req.body.course_id,
        user_id: req.token.id
      })

      return createOKResponse({
        res,
        content: {
          section
        }
      })
    } catch (error) {
      return createErrorResponse({
        res,
        error: {
          message: 'Not Authorized'
        },
        status: 401
      })
    }
  }

  return {
    addSection: _addSection
  }
}
