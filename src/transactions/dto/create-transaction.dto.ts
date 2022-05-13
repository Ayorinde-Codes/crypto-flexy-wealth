import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transactiontype } from 'src/transaction-types/entities/transaction-types-entity';
import { WalletTypes } from 'src/wallet-types/entities/wallet-types.entity';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  walletType: WalletTypes;

  @IsNotEmpty()
  @IsNumber()
  transactionType: Transactiontype;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @IsNotEmpty()
  @IsString()
  type: string;
}
