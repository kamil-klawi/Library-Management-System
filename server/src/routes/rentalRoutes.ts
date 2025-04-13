import { Router } from 'express';
import { extendBook, rentBook, returnBook } from '../controllers/rentalController';
import { authenticate } from '../middlewares/authMiddleware';
import { UserRole } from '../models/userModel';

const router = Router();

router.post('/rent', authenticate([UserRole.USER, UserRole.ADMIN]), rentBook);
router.put('/return/:rentalId', authenticate([UserRole.USER, UserRole.ADMIN]), returnBook);
router.put('/extend/:rentalId', authenticate([UserRole.USER, UserRole.ADMIN]), extendBook);

export default router;