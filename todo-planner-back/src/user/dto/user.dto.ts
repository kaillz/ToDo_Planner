import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @MinLength(6, {
    message: 'Password must be at least 6 character long',
  })
  @IsString()
  password?: string;
}
