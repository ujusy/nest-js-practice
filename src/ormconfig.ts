import { User } from './user/entities/user.entity';
import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: '1234',
  database: 'ujusy',
  // entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
  entities: [User],
  // migrations: [path.join(__dirname, '**/migration/*{.ts,.js}')],
  migrations: [__dirname + '/src/migrations/*.ts'],
  // migrations: [__dirname + '../../dist/migrations/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations/' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false,
};

export = config;
