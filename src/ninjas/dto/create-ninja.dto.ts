import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(5)
  name: string;

  @IsEnum(['MK14', 'AUG'], { message: 'Use a correct weapon!' })
  weapon: 'MK14' | 'AUG';
}
