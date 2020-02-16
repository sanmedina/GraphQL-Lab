import { Book, Author } from '../models';
import { Resolver, Query, Arg, FieldResolver, Root, Mutation } from 'type-graphql';
import { AddBookInput } from './book.input';

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
}
