import { Table, Model, Column, PrimaryKey, DataType, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import Author from './author.model';

@Table({
    tableName: 'book',
    timestamps: false
})
@ObjectType()
export default class Book extends Model<Book> {
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
        type: DataType.STRING(10)
    })
    @Field({ nullable: false })
    public genre!: string;

    @ForeignKey(() => Author)
    @Column({
        type: DataType.INTEGER
    })
    @Field(type => Int, { nullable: false })
    public authorId!: number;

    @BelongsTo(() => Author)
    public readonly author?: Author;
}
