import { Resolver, FieldResolver, Root, Query, Arg, Mutation } from 'type-graphql';
import { Book, Author } from '../models';
import { AddAuthorInput } from './author.input';

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

    @Mutation(type => Author)
    async addAuthor(@Arg('data') newAuthorData: AddAuthorInput): Promise<Author> {
        return await Author.create(newAuthorData);
    }
}
