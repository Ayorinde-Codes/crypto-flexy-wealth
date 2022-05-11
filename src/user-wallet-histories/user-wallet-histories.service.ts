import { Injectable } from '@nestjs/common';
import { CreateUserWalletHistoryDto } from './dto/create-user-wallet-history.dto';
import { UserWalletHistory } from './entity/user-wallet-history.entity';

@Injectable()
export class UserWalletHistoriesService {
  async show(): Promise<any> {
    return await UserWalletHistory.find();
  }

  async showByUserId(userId: number): Promise<any> {
    return await UserWalletHistory.find({
      where: {
        user: { id: userId },
      },
    });
  }

  async create(createUserWalletHistoryDto: CreateUserWalletHistoryDto) {
    const userWalletHistory = UserWalletHistory.create(
      createUserWalletHistoryDto,
    );
    return await userWalletHistory.save();
  }
}
