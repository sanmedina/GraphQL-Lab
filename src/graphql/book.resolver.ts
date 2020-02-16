import { Book, Author } from '../models';
import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql';

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
}
