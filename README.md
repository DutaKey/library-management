# Dokumentasi Aplikasi Library Management

Selamat datang di dokumentasi untuk Aplikasi Library Management. Dokumentasi ini akan membantu Bapak/Ibu melalui langkah-langkah untuk mengatur dan menjalankan aplikasi dengan lancar.

---
 Langkah 1: Setup Awal

1. **Persyaratan Sistem:**
   Pastikan sistem Bapak/Ibu memenuhi persyaratan berikut sebelum melanjutkan:

   - Node.js versi terbaru telah terinstal di sistem Bapak/Ibu.
   - MySQL telah terinstal dan berjalan di localhost.

2. **Instalasi Dependensi:**
   Buka terminal Bapak/Ibu dan arahkan ke direktori proyek. Kemudian jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
   ```bash
   npm install
   ```

3. **Konfigurasi Database:**
   Pastikan Bapak/Ibu telah membuat database MySQL dengan nama `library_db`.

4. **Setup `src/app.module.ts`:**
   Dalam berkas `src/app.module.ts`, pastikan Bapak/Ibu telah mengonfigurasi koneksi database seperti berikut:

   ```typescript
   @Module({
     imports: [
       TypeOrmModule.forRoot({
         type: 'mysql',
         host: 'localhost',
         port: 3306,
         username: 'root',
         password: '',
         database: 'library_db',
         autoLoadEntities: true,
         synchronize: true,
       }),
       BooksModule,
       CategoriesModule,
     ],
   })
   ```

   Silakan ubah pengaturan koneksi sesuai dengan kebutuhan jika diperlukan.

5. **Menjalankan Aplikasi:**
   Setelah melakukan setup awal, Bapak/Ibu dapat menjalankan aplikasi dengan perintah:

   ```bash
   npm run start
   ```

6. **Akses Aplikasi dan Pengujian dengan Postman:**
   Setelah aplikasi berhasil dijalankan, Bapak/Ibu dapat mengaksesnya melalui `http://localhost:3000`. Selanjutnya, untuk menguji fungsionalitas API, gunakan Postman Collection yang telah disertakan dalam repository ini. Impor koleksi Postman ke aplikasi Postman Bapak/Ibu dan jalankan permintaan API sesuai kebutuhan.

---

#### Penutup

Terima kasih telah menguji dan mencoba aplikasi saya. Kalau ada salah bahasa saya minta maaf sebesar besarnya

Hormat Saya
- Duta Pasha Febrian
