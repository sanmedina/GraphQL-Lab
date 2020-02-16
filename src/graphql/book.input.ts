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

@InputType()
class UpdateBookInput implements Partial<Book> {
    @Field({ nullable: true })
    public name?: string;

    @Field({ nullable: true })
    public genre?: string;
}

export {
    AddBookInput,
    UpdateBookInput,
}
