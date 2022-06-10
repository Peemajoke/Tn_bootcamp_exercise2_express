import express from 'express'
import studentController from './controllers/student'
import validator from './request'

const router = express.Router()

router
  .get('/students', studentController.getAllStudents)
  .get('/students/:ID', validator.getById, studentController.getStudentById)
  .post('/students', validator.create, studentController.createStudent)
  .put('/students/:ID', validator.updateById, studentController.updateStudentById)
  .delete('/students/:ID', validator.deleteById, studentController.deleteStudentById)
  .get('/students/:ID/gpax', studentController.getGpaxOfStudentById)

export default router
