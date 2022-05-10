import { Module } from '@nestjs/common';
import { UserWalletHistoriesService } from './user-wallet-histories.service';
import { UserWalletHistoriesController } from './user-wallet-histories.controller';

@Module({
  controllers: [UserWalletHistoriesController],
  providers: [UserWalletHistoriesService],
})
export class UserWalletHistoriesModule {}
