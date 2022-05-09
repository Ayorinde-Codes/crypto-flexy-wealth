import { WalletTypes } from 'src/wallet-types/entities/wallet-types.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import {
//   DecimalToString,
//   DecimalTransformer,
// } from 'src/Util/decimal.transformer';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class UserWallet extends BaseEntity {
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

  //   @Column({
  //     name: 'balance',
  //     type: 'decimal',
  //     precision: 10,
  //     scale: 2,
  //     default: 0.0,
  //     transformer: new DecimalTransformer(),
  //   })
  //   @Transform(DecimalToString(), { toPlainOnly: true })
  //   public balance: Decimal;
}
