import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    example: 'lsuju19@naver.com',
    description: '이메일',
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '이우주',
    description: '이름',
  })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234*',
    description: '비밀번호',
  })
  public password: string;
}
