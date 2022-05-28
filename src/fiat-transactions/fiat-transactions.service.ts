import { Injectable } from '@nestjs/common';
import { CreateFiatTransactionDto } from './dto/create-fiat-transaction.dto';
import { FiatTransaction } from './entity/fiat-transaction.entity';

@Injectable()
export class FiatTransactionsService {
  async create(createFiatTransactionDto: CreateFiatTransactionDto) {
    const createFiatTransaction = FiatTransaction.create(
      createFiatTransactionDto,
    );
    return await createFiatTransaction.save();
  }

  async show(): Promise<any> {
    return FiatTransaction.find();
  }

  async showById(id: number): Promise<any> {
    return FiatTransaction.findOneBy({ id });
  }
}
