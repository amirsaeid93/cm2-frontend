const express = require('express');
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
} = require('../controllers/jobController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.get('/', getAllJobs);
router.get('/:id', getJob);
router.post('/', requireAuth, createJob); // Protect route
router.put('/:id', requireAuth, updateJob); // Protect route
router.delete('/:id', requireAuth, deleteJob); // Protect route

module.exports = router;