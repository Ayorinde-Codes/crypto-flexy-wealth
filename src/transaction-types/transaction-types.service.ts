import { Injectable } from '@nestjs/common';
import { CreateTransactionTypesDto } from './dto/create-transaction-type.dto';
import Transactiontypes from './entities/transaction-types-entity';

@Injectable()
export class TransactionTypesService {
  async create(
    createTransactionTypesDto: CreateTransactionTypesDto,
  ): Promise<Transactiontypes> {
    const transactionType = Transactiontypes.create(createTransactionTypesDto);
    return await transactionType.save();
  }

  async show(): Promise<Transactiontypes[]> {
    return await Transactiontypes.find();
  }

  async showById(id: number): Promise<Transactiontypes> {
    return await Transactiontypes.findOneBy({ id });
  }
}
