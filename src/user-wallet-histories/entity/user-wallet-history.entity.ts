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
export class UserWalletHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => WalletTypes)
  @JoinColumn()
  walletType: WalletTypes;

  @Column('decimal', { precision: 27, scale: 18 })
  initial_balance: number;

  @Column('decimal', { precision: 27, scale: 18 })
  actual_balance: number;

  @ManyToOne(() => User, (user) => user.userWallets)
  user: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
