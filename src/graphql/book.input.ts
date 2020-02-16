import { InputType, Field } from 'type-graphql';
import { Book } from '../models';

@InputType()
class AddBookInput implements Partial<Book> {
    @Field()
    public name!: string;

    @Field()
    public genre!: string;

    @Field()
    public authorId!: number;
}

export {
    AddBookInput
}
