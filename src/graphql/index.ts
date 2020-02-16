import BookResolver from './book.resolver';
import AuthorResolver from './author.resolver';
import { buildSchemaSync } from 'type-graphql';

const schema = buildSchemaSync({
    resolvers: [BookResolver, AuthorResolver],
});

export default schema;
