import { InputType, Field, Int } from 'type-graphql';

@InputType()
export default class PaginationInput {
    @Field(type => Int)
    public page!: number;

    @Field(type => Int)
    public pageSize!: number;

    @Field(type => String, { nullable: true })
    public keyword?: number;
}
