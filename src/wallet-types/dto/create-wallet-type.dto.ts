import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWalletTypesDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  symbol: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
