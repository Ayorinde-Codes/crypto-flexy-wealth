import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entity/transaction.entity';

@Injectable()
export class TransactionsService {
  async show(): Promise<any> {
    return await Transaction.find();
  }

  async showByUserId(userId: number): Promise<any> {
    return await Transaction.find({
      where: {
        user: { id: userId },
      },
    });
  }

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = Transaction.create(createTransactionDto);
    return await transaction.save();
  }

  async showByUserIdAndWalletId(
    userId: number,
    walletId: number,
  ): Promise<any> {
    return await Transaction.find({
      where: {
        user: { id: userId },
        walletType: { id: walletId },
      },
    });
  }
}
