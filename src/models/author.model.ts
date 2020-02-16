import { Table, Model, Column, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript';
import { ObjectType, Field, ID, Int } from 'type-graphql';

@Table({
    tableName: 'author',
    timestamps: false
})
@ObjectType()
export default class Author extends Model<Author> {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER
    })
    @Field(type => ID)
    public id!: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    @Field({ nullable: false })
    public name!: string;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    @Field(type => Int, { nullable: false })
    public age!: number;
}
