import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserWalletHistoryDto } from './dto/create-user-wallet-history.dto';
import { UserWalletHistoriesService } from './user-wallet-histories.service';

@Controller('user-wallet-histories')
export class UserWalletHistoriesController {
  constructor(
    private readonly userWalletHistoriesService: UserWalletHistoriesService,
  ) {}

  @Post()
  create(@Body() createUserWalletHistoryDto: CreateUserWalletHistoryDto) {
    return this.userWalletHistoriesService.create(createUserWalletHistoryDto);
  }

  @Get()
  show() {
    return this.userWalletHistoriesService.show();
  }

  @Get(':userId')
  showByUserId(@Param('userId') userId: number) {
    return this.userWalletHistoriesService.showByUserId(userId);
  }
}
