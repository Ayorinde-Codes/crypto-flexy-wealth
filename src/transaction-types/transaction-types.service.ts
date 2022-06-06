import { Injectable } from '@nestjs/common';
import { CreateTransactionTypesDto } from './dto/create-transaction-type.dto';
import { Transactiontype } from './entities/transaction-types-entity';

@Injectable()
export class TransactionTypesService {
  async create(
    createTransactionTypesDto: CreateTransactionTypesDto,
  ): Promise<Transactiontype> {
    const transactionType = Transactiontype.create(createTransactionTypesDto);
    return await transactionType.save();
  }

  async show(): Promise<Transactiontype[]> {
    return await Transactiontype.find();
  }

  async showById(id: number): Promise<Transactiontype> {
    return await Transactiontype.findOneBy({ id });
  }
}
