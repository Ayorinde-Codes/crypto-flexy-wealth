import { Transactiontype } from 'src/transaction-types/entities/transaction-types-entity';
import { Transaction } from 'src/transactions/entity/transaction.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class FiatTransaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 27, scale: 18 })
  amount: number;

  @Column()
  status: string;

  @Column()
  type: string;

  @OneToOne(() => Transactiontype)
  @JoinColumn()
  transactionType: Transactiontype;

  @ManyToOne(() => Transaction, (transaction) => transaction.cryptoTransaction)
  transaction: Transaction;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
