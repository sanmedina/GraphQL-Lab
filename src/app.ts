import express from 'express';
import sequilize from './db';
import { Author, Book } from './models';

sequilize.sync();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({ hello: 'world' });
});

app.get('/books', async (req, res) => {
    const books = await Book.findAll();
    return res.status(200).send(books);
});

app.post('/books', async (req, res) => {
    const book = await Book.build({
        name: req.body.name,
        genre: req.body.genre,
        authorId: req.body.authorId,
    }).save();
    return res.status(200).send(book);
});

app.get('/authors', async (req, res) => {
    const authors = await Author.findAll();
    return res.status(200).send(authors);
});

app.post('/authors', async (req, res) => {
    const author = new Author();
    author.name = req.body.name;
    author.age = req.body.age;
    await author.save();
    return res.status(200).send(author);
});

export {
    app
};
