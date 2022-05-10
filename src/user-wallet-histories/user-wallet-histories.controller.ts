import { Controller } from '@nestjs/common';
import { UserWalletHistoriesService } from './user-wallet-histories.service';

@Controller('user-wallet-histories')
export class UserWalletHistoriesController {
  constructor(
    private readonly userWalletHistoriesService: UserWalletHistoriesService,
  ) {}
}
