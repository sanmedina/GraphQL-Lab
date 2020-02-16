import Author from './author.model';
import Book from './book.model';

import sequilize from '../db';

sequilize.addModels([
    Author,
    Book,
]);

export {
    Author,
    Book,
};
