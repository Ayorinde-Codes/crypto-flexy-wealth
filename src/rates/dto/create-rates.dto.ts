import { IsNotEmpty, IsNumber } from 'class-validator';
import { WalletTypes } from 'src/wallet-types/entities/wallet-types.entity';

export class CreateRatesDto {
  @IsNotEmpty()
  @IsNumber()
  walletType: WalletTypes;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  buy_rate: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  sell_rate: number;
}

// walletType: WalletTypes;

// buy_rate: number;

// sell_rate: number;
