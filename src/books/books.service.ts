import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(book);
  }

  findAll(): Promise<Book[]> {
    return this.booksRepository.find({ relations: ['category'] });
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    await this.booksRepository.update(id, updateBookDto);
    return this.booksRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  async remove(id: number): Promise<string> {
    await this.booksRepository.delete(id);
    return 'Books Deleted';
  }
}
