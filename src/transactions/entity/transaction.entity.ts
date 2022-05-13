import { Transactiontype } from 'src/transaction-types/entities/transaction-types-entity';
import { User } from 'src/users/entities/user.entity';
import { WalletTypes } from 'src/wallet-types/entities/wallet-types.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @OneToOne(() => Transactiontype)
  @JoinColumn()
  transactionType: Transactiontype;

  @OneToOne(() => WalletTypes)
  @JoinColumn()
  walletType: WalletTypes;

  @Column({
    type: 'enum',
    enum: ['processing', 'failed', 'successful'],
    default: 'processing',
  })
  status: string;

  @Column({
    type: 'enum',
    enum: ['transfer', 'withdrawal', 'deposit'],
  })
  type: string;

  @Column()
  rate: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
