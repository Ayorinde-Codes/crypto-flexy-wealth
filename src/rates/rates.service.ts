import { Injectable } from '@nestjs/common';
import { WalletTypesService } from 'src/wallet-types/wallet-types.service';
import { CreateRatesDto } from './dto/create-rates.dto';
import { Rate } from './entity/rates.entity';

@Injectable()
export class RatesService {
  async create(createRateDto: CreateRatesDto) {
    const rate = Rate.create(createRateDto);
    return await rate.save();
  }

  async show(): Promise<any> {
    return Rate.find();
  }

  async showById(id: number): Promise<any> {
    return Rate.findOneBy({ id });
  }

  async showByWalletID(walletId: number): Promise<any> {
    const wallet = new WalletTypesService();
    const response = await wallet.showById(walletId);

    if (!response) {
      throw new Error('WalletType not found');
    }

    return await Rate.find({
      where: {
        walletType: { id: walletId },
      },
    });
  }
}
