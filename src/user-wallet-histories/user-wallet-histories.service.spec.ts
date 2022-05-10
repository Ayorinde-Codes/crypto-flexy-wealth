import { Test, TestingModule } from '@nestjs/testing';
import { UserWalletHistoriesService } from './user-wallet-histories.service';

describe('UserWalletHistoriesService', () => {
  let service: UserWalletHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWalletHistoriesService],
    }).compile();

    service = module.get<UserWalletHistoriesService>(
      UserWalletHistoriesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
