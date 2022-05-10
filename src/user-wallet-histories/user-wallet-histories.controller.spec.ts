import { Test, TestingModule } from '@nestjs/testing';
import { UserWalletHistoriesController } from './user-wallet-histories.controller';
import { UserWalletHistoriesService } from './user-wallet-histories.service';

describe('UserWalletHistoriesController', () => {
  let controller: UserWalletHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWalletHistoriesController],
      providers: [UserWalletHistoriesService],
    }).compile();

    controller = module.get<UserWalletHistoriesController>(
      UserWalletHistoriesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
