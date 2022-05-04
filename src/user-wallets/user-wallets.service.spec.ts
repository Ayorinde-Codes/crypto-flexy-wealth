import { Test, TestingModule } from '@nestjs/testing';
import { UserWalletsService } from './user-wallets.service';

describe('UserWalletsService', () => {
  let service: UserWalletsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWalletsService],
    }).compile();

    service = module.get<UserWalletsService>(UserWalletsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
