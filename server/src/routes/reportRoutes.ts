import { Router } from 'express';
import { authenticate } from '../middlewares/authMiddleware';
import { UserRole } from '../models/userModel';
import { getAllRentals, getExtendedRentals, getOverdueRentals } from '../controllers/reportsController';

const router = Router();

router.get('/rentals', authenticate([UserRole.ADMIN]), getAllRentals);
router.get('/overdue', authenticate([UserRole.ADMIN]), getOverdueRentals);
router.get('/extended', authenticate([UserRole.ADMIN]), getExtendedRentals);

export default router;