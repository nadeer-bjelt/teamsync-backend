const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const projectValidation = require('../../validations/project.validation');
const projectController = require('../../controllers/project.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(projectValidation.createProject), projectController.createProject)
  .get(validate(projectValidation.getAllProjects), projectController.getAllProjects);

router
  .route('/:projectId')
  .get(validate(projectValidation.getParticularProject), projectController.getParticularProject)
  .patch(validate(projectValidation.updateProject), projectController.updateProject);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Project Management
 */

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new one
 *     description: Only admins can create new department.
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - managerId
 *               - startDate
 *               - endDate
 *               - status
 *               - priority
 *               - departmentId
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               managerId:
 *                 type: string
 *               startDate:
 *                  type: date
 *               endDate:
 *                  type: date
 *               status:
 *                  type: string
 *               priority:
 *                  type: string
 *               teamMembers:
 *                  type: array
 *               tasks:
 *                  type: array
 *               departmentId:
 *                  type: string
 *               attachments:
 *                  type: array
 *             example:
 *               title: fake department
 *               description: fake description
 *               managerId: 647b106b93c84a2b1032a4ce
 *               startDate: 2023-06-08
 *               endDate: 2023-07-08
 *               status: Completed
 *               priority: Medium
 *               teamMembers: []
 *               tasks: []
 *               departmentId: 648036845077cf06a880cf90
 *               attachments: []
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Project'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
