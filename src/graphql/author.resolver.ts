import { Resolver, FieldResolver, Root, Query, Arg } from 'type-graphql';
import { Book, Author } from '../models';

@Resolver(of => Author)
export default class AuthorResolver {
    @FieldResolver(type => [Book])
    async books(@Root() author: Author): Promise<Book[]> {
        return await author.$get('books');
    }

    @Query(returns => Author)
    async author(@Arg('id') id: number) {
        return await Author.findByPk(id);
    }

    @Query(returns => [Author])
    async authors() {
        return await Author.findAll();
    }
}
