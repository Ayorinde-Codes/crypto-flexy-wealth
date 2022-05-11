import { IsNotEmpty, IsNumber } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { WalletTypes } from 'src/wallet-types/entities/wallet-types.entity';

export class CreateUserWalletHistoryDto {
  @IsNotEmpty()
  @IsNumber()
  walletType: WalletTypes;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  initial_balance: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  actual_balance: number;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  user: User;
}
