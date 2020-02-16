import { Table, Model, Column, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript';

@Table({
    tableName: 'author',
    timestamps: false
})
export default class Author extends Model<Author> {
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
        type: DataType.INTEGER
    })
    public age!: number;
}
