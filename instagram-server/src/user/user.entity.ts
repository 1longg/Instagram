import { Exclude } from 'class-transformer';
import { Follow } from 'src/follower/follow.entity';
import { LikePost } from 'src/like-post/like-post.entity';
import { Post } from 'src/post/post.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ default: 'https://instagram-store-image.s3.ap-southeast-2.amazonaws.com/default-avatar.png' })
  avatar: string;

  @OneToMany(() => Follow, (follow) => follow.userTo, { onDelete: 'CASCADE' })
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.userFrom, { onDelete: 'CASCADE' })
  following: Follow[];

  @OneToMany(() => Post, (post) => post.author, { onDelete: 'CASCADE' })
  posts: Post[];

  @OneToMany(() => LikePost, (likePost) => likePost.user, { onDelete: 'CASCADE' })
  likePostOfUser: LikePost[];
}
