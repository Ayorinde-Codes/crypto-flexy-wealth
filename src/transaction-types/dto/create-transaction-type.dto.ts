import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransactionTypesDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
