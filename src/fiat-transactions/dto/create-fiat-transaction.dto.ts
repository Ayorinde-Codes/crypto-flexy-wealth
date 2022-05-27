import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transactiontype } from 'src/transaction-types/entities/transaction-types-entity';

export class CreateFiatTransactionDto {
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
