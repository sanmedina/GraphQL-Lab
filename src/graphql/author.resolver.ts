import { Resolver, FieldResolver, Root, Query, Arg, Mutation, Int } from 'type-graphql';
import { Book, Author } from '../models';
import { AddAuthorInput, UpdateAuthorInput } from './author.input';

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

    @Mutation(type => Author)
    async updateAuthor(
        @Arg('id', type => Int) id: number,
        @Arg('data') authorData: UpdateAuthorInput
    ): Promise<Author> {
        const author = await Author.findByPk(id);
        if (!author) {
            throw new Error('Author with given ID does not exists');
        }
        author.setAttributes(authorData);
        await author.save();
        return author;
    }
}
