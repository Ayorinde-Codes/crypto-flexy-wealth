import { Injectable } from '@nestjs/common';
import { CreateUserWalletsDto } from './dto/create-user-wallets.dto';
import { UserWallet } from './entitty/user-wallet.entity';

@Injectable()
export class UserWalletsService {
  async show(): Promise<any> {
    return await UserWallet.find();
  }

  async showByUserId(userId: number): Promise<any> {
    return await UserWallet.find({
      where: {
        user: { id: userId },
      },
    });
  }

  async create(createUserWalletDto: CreateUserWalletsDto) {
    const userWallet = UserWallet.create(createUserWalletDto);
    return await userWallet.save();
  }
}
