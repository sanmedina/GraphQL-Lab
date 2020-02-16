import { Table, Model, Column, PrimaryKey, DataType, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Author from './author.model';

@Table({
    tableName: 'book',
    timestamps: false
})
export default class Book extends Model<Book> {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER
    })
    public id!: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    public name!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(10)
    })
    public genre!: string;

    @ForeignKey(() => Author)
    @Column({
        type: DataType.INTEGER
    })
    public authorId!: number;

    @BelongsTo(() => Author)
    public readonly author?: Author;
}
