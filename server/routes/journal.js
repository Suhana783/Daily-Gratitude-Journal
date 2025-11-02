import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { 
  createEntry,
  getEntries,
  getEntry,
  updateEntry,
  deleteEntry 
} from '../controllers/journalController.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .post(createEntry)
  .get(getEntries);

router.route('/:id')
  .get(getEntry)
  .put(updateEntry)
  .delete(deleteEntry);

export default router;