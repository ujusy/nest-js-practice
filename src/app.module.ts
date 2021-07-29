import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormconfig from './ormconfig';
import { User } from './user/entities/user.entity';
import path from 'path';

@Module({
  // imports: [TypeOrmModule.forRoot(ormconfig)],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '1234',
      database: 'ujusy',
      // entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
      entities: [User],
      // migrations: [path.join(__dirname, '**/migration/*{.ts,.js}')],
      migrations: [__dirname + '../../dist/migrations/*.ts'],
      cli: { migrationsDir: 'src/migrations' },
      autoLoadEntities: true,
      charset: 'utf8mb4',
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
