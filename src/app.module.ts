import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormconfig from './ormconfig';

import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  // imports: [TypeOrmModule.forRoot(ormconfig)],
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): void {
//     consumer.apply(LoggerMiddleware).forRoutes('*');
//   }
// }
