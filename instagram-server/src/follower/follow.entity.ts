import { User } from 'src/user/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Follow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userToId: string;

  @Column()
  userFromId: string;

  @ManyToOne(() => User, (user) => user.followers, { onDelete: 'CASCADE' })
  userTo: User[];

  @ManyToOne(() => User, (user) => user.following, { onDelete: 'CASCADE' })
  userFrom: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
