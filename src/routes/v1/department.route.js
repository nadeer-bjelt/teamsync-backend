const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const departmentValidation = require('../../validations/department.validation');
const departmentController = require('../../controllers/department.controller');

const router = express.Router();

router.route('/').post(validate(departmentValidation.createDepartment), departmentController.createDepartment);
router.route('/:departmentId').delete(validate(departmentValidation.deleteDepartment), departmentController.deleteDepartment)
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Departments
 *   description: Department management and retrieval
 */

/**
 * @swagger
 * /departments:
 *   post:
 *     summary: Create a new department
 *     description: Only admins can create new department.
 *     tags: [Departments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - managerId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               managerId:
 *                 type: string
 *               members:
 *                  type: array
 *               projects:
 *                  type: array
 *               tasks:
 *                  type: array
 *             example:
 *               name: fake department
 *               description: fake description
 *               managerId: 647b106b93c84a2b1032a4ce
 *               members: []
 *               projects: []
 *               tasks: []
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Department'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 * 
 * 
 *  
 */
/**
 * @swagger
 * /departments/{id}:
 *  delete:
 *     summary:Delete a Department
 *     description:dhwijdjb
 *     tags:[Departments]
 *     security:
 *       - bearerAuth:[]
 *     parameters:
 *       - in: path
 *         name:id 
 *         required:true
 *         schema:
 *           type:string
 *         description:department id
 *     responses:
 *       "200":
 *        description:No content
 *       "401":
 *          $ref:'#/component/responses/Unauthorized'
 *       "403":
 *          $ref:#/components/responses/Forbidden'
 *       "404":
 *          $ref:'#/components/responses/NotFound
 */
