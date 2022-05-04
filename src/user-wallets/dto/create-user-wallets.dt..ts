import { IsNotEmpty, IsNumber } from 'class-validator';
import { WalletTypes } from 'src/wallet-types/entities/wallet-types.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateUserWalletsDto {
  @IsNotEmpty()
  @IsNumber()
  walletType: WalletTypes;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  balance: number;

  @IsNotEmpty()
  @IsNumber()
  user: User;
}
