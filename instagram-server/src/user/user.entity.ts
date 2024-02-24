import { Exclude } from 'class-transformer';
import { Follow } from 'src/follower/follow.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  bio: string;

  @OneToMany(() => Follow, (follow) => follow.userTo, { onDelete: 'CASCADE' })
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.userFrom, { onDelete: 'CASCADE' })
  following: Follow[];
}
