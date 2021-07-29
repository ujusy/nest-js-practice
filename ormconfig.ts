import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { User } from './src/user/entities/user.entity';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: '1234',
  database: 'ujusy',
  // entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
  entities: [User],
  migrations: [__dirname + '/src/migrations/*.ts'],
  synchronize: false,
};

export = config;
