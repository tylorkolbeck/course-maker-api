const sectionFacade = require('#facades/section')
const {
  createOKResponse,
  createErrorResponse
} = require('#factories/responses/api')
const { Err } = require('#factories/errors')

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

  _deleteSection = async (req, res) => {
    try {
      const section = await sectionFacade.findOneSectionForUser(
        req.params['id'],
        req.token.id
      )

      if (!section) {
        const err = new Err('Not authorized')
        throw err
      }
      const sectionId = await sectionFacade.deleteSection(
        req.token.id,
        req.params['id']
      )

      return createOKResponse({
        res,
        content: {
          sectionId
        }
      })
    } catch (error) {
      console.log(error)
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
    addSection: _addSection,
    deleteSection: _deleteSection
  }
}
