import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { userErrors } from './error/errors';
import { createDeflateRaw } from 'zlib';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: data.email,
      },
    });

    if (user) throw new BadRequestException(userErrors.EXISTING_USER);

    const userData = await this.userRepository.save({
      email: data.email,
      name: data.name,
    });

    return userData;
  }

  async findAll() {
    const users = await this.userRepository.find({});

    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);

    if (!user) throw new NotFoundException(userErrors.NOT_FOUND);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
