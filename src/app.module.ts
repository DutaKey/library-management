import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';

// untuk hosting di vercel
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT || 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        ca: process.env.CA,
        rejectUnauthorized: true,
      },
    }),
    BooksModule,
    CategoriesModule,
  ],
})

// untuk local app

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'library_db',
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     BooksModule,
//     CategoriesModule,
//   ],
// })
export class AppModule {}
