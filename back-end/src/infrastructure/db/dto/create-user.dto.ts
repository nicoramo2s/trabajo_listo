import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { Category } from "src/common/interfaces/category.interfaces";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNumber()
  @IsOptional()
  readonly phone?: number;

  @IsString()
  @IsOptional()
  readonly imageProfile?: string;

  @IsString()
  @IsOptional()
  readonly isProfesisonal?: boolean;

  @IsOptional()
  readonly category?: Category[];

  @IsString()
  @IsOptional()
  readonly address?: string;
}
