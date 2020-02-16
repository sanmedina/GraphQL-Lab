import { InputType, Field } from 'type-graphql';
import { Author } from '../models';

@InputType()
class AddAuthorInput implements Partial<Author> {
    @Field()
    public name!: string;

    @Field()
    public age!: number;
}

@InputType()
class UpdateAuthorInput implements Partial<Author> {
    @Field({ nullable: true })
    public name?: string;

    @Field({ nullable: true })
    public age?: number;
}

export {
    AddAuthorInput,
    UpdateAuthorInput,
}
