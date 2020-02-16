import { Resolver, FieldResolver, Root, Query, Arg } from 'type-graphql';
import { Book, Author } from '../models';

@Resolver(of => Author)
export default class AuthorResolver {
    @FieldResolver(type => [Book])
    async books(@Root() author: Author): Promise<Book[]> {
        return await Book.findAll({ where: { authorId: author.id } });
    }

    @Query(returns => Author)
    async author(@Arg('id') id: number) {
        return await Author.findOne({ where: { id: id }});
    }

    @Query(returns => [Author])
    async authors() {
        return await Author.findAll();
    }
}
