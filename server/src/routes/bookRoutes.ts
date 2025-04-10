import { Router } from 'express';
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from '../controllers/bookController';
import { authenticate } from '../middlewares/authMiddleware';
import { UserRole } from '../models/userModel';

const router = Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', authenticate([UserRole.ADMIN]), addBook);
router.put('/:id', authenticate([UserRole.ADMIN]), updateBook);
router.delete('/:id', authenticate([UserRole.ADMIN]), deleteBook);

export default router;