import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'centauros-api',
    entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
    synchronize: true,
};