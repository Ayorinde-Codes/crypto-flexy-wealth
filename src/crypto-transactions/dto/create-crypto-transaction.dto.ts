import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { Transactiontype } from 'src/transaction-types/entities/transaction-types-entity';

export class CreateCryptoTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  transactionType: Transactiontype;

  @IsNotEmpty()
  @IsString()
  type: string;
}
