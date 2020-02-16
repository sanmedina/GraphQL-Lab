import { Sequelize } from 'sequelize-typescript';

const sequilize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});

export default sequilize;
