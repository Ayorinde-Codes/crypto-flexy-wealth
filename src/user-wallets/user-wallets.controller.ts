import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserWalletsDto } from './dto/create-user-wallets.dto';
import { UserWalletsService } from './user-wallets.service';

@Controller('user-wallets')
export class UserWalletsController {
  constructor(private readonly userWalletsService: UserWalletsService) {}

  @Post()
  create(@Body() createUserWalletDto: CreateUserWalletsDto) {
    return this.userWalletsService.create(createUserWalletDto);
  }

  @Get()
  show() {
    return this.userWalletsService.show();
  }

  @Get(':userId')
  showByUserId(@Param('userId') userId: number) {
    return this.userWalletsService.showByUserId(userId);
  }
}
