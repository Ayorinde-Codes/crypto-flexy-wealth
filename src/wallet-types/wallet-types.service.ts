import { Injectable } from '@nestjs/common';
import { CreateWalletTypesDto } from './dto/create-wallet-type.dto';
// import { EditWalletTypeDto } from './dto/edit-wallet-type.dto';
import { WalletTypes } from './entities/wallet-types.entity';

@Injectable()
export class WalletTypesService {
  async create(createWalletTypesDto: CreateWalletTypesDto) {
    const walletType = WalletTypes.create(createWalletTypesDto);
    return await walletType.save();
    // return walletType;
  }

  async show(): Promise<WalletTypes[]> {
    return await WalletTypes.find();
  }

  async showById(id: number): Promise<WalletTypes> {
    return await WalletTypes.findOneBy({ id });
  }

  async updateWalletType(wallet) {
    const { walletId, name, symbol, type } = wallet;
    // get the walletType by id
    const walletType = await WalletTypes.findOneByOrFail({ id: walletId });

    if (!walletType) {
      throw new Error('WalletType not found');
    }

    walletType.name = name;
    walletType.symbol = symbol;
    walletType.type = type;

    return await walletType.save();
  }
}
