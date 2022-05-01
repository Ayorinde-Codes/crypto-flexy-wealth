import { IsOptional, IsString } from 'class-validator';

export class EditWalletTypeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  symbol?: string;

  @IsString()
  @IsOptional()
  type?: string;
}
