import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  pages: number;

  @Column({ type: 'text' })
  description: string;

  @Column()
  cover: string;

  @ManyToOne(() => Category, (category) => category.books)
  category: Category;
}
