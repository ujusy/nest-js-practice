import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from '../auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  providers: [UserService, AuthService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
