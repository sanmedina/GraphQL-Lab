import { InputType, Field } from 'type-graphql';
import { Author } from '../models';

@InputType()
class AddAuthorInput implements Partial<Author> {
    @Field()
    public name!: string;

    @Field()
    public age!: number;
}

export {
    AddAuthorInput
}
