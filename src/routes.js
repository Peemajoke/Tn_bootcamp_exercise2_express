import express from 'express'
import studentController from './controllers/student'
// import validator from './request'

const router = express.Router()

router
  .get('/students', studentController.getAllStudents)
  .get('/students/:ID', studentController.getStudentById)
  .post('/students', studentController.createStudent)
  .put('/students/:ID', studentController.updateStudentById)
  .delete('/students/:ID', studentController.deleteStudentById)
  .get('/students/:ID/gpax', studentController.getGpaxOfStudentById)

export default router
