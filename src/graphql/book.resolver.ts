import { Book, Author } from '../models';
import { Resolver, Query, Arg, FieldResolver, Root, Mutation, Int } from 'type-graphql';
import { AddBookInput, UpdateBookInput } from './book.input';

@Resolver(of => Book)
export default class BookResolver {
    @FieldResolver(type => Author)
    async author(@Root() book: Book): Promise<Author | null> {
        return await book.$get('author');
    }

    @Query(returns => Book)
    async book(@Arg('id') id: number) {
        return await Book.findByPk(id);
    }

    @Query(returns => [Book])
    async books() {
        return await Book.findAll();
    }

    @Mutation(type => Book)
    async addBook(@Arg('data') newBookData: AddBookInput) {
        return await Book.create(newBookData);
    }

    @Mutation(type => Book)
    async updateBook(
        @Arg('id', type => Int) id: number,
        @Arg('data') bookData: UpdateBookInput
    ) {
        const book = await Book.findByPk(id);
        if (!book) {
            throw new Error('Book with given ID does not exists');
        }
        book.setAttributes(bookData);
        await book.save();
        return book;
    }
}
