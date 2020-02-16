import { Book, Author } from '../models';
import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql';

@Resolver(of => Book)
export default class BookResolver {
    @FieldResolver(type => Author)
    async author(@Root() book: Book): Promise<Author | null> {
        return await Author.findOne({ where: { id: book.authorId } });
    }

    @Query(returns => Book)
    async book(@Arg('id') id: number) {
        return await Book.findOne({ where: { id: id } });
    }

    @Query(returns => [Book])
    async books() {
        return await Book.findAll();
    }
}
