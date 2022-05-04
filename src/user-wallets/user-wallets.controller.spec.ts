import { Test, TestingModule } from '@nestjs/testing';
import { UserWalletsController } from './user-wallets.controller';
import { UserWalletsService } from './user-wallets.service';

describe('UserWalletsController', () => {
  let controller: UserWalletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWalletsController],
      providers: [UserWalletsService],
    }).compile();

    controller = module.get<UserWalletsController>(UserWalletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
