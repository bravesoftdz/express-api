import { Router } from 'express';
import BookController from '../app/components/books/BookController';

const router = Router();

router.get('/', BookController.getAllBooks);
router.post('/', BookController.addBook);
router.get('/:id', BookController.getABook);
router.put('/:id', BookController.updatedBook);
router.delete('/:id', BookController.deleteBook);

export default router;
