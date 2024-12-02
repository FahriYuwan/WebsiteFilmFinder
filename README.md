# FilmFinder

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![License](https://img.shields.io/github/license/FahriYuwan/WebsiteFilmFinder?color=orange)

## Deskripsi Proyek

FilmFinder adalah platform berbasis web yang menyediakan informasi terperinci tentang film, acara TV, dan konten hiburan lainnya, mirip dengan situs IMDb (Internet Movie Database). Platform ini dirancang untuk memungkinkan pengguna mencari, menilai, dan mengelola informasi tentang film dan acara TV dengan mudah.

## Fitur Utama

1. **Beranda**: Menampilkan daftar film dan acara TV yang sedang populer.
2. **Detail Drama/Film/Acara TV**: Halaman yang menampilkan informasi lengkap tentang sebuah film atau acara TV, termasuk sinopsis, tanggal rilis, durasi, genre, pemeran, rating, dan ulasan pengguna.
3. **Pencarian dan Filter**: Pengguna dapat mencari film atau acara TV berdasarkan judul, aktor, atau genre. Terdapat juga fitur filter untuk mempermudah pencarian berdasarkan tahun rilis, rating, award, dan lainnya.
4. **Manajemen Konten**: Fitur untuk administrator untuk menambahkan, mengedit, atau menghapus informasi tentang film dan acara TV yang ada di database aplikasi.
5. **Sistem Pendaftaran dan Login**: Pengguna dapat membuat akun dan login untuk mengakses fitur yang dipersonalisasi, seperti menyimpan daftar tontonan dan menambahkan ulasan. Fitur tambahan termasuk konfirmasi email dan fitur lupa/reset password, serta login menggunakan Google atau media sosial lainnya.
6. **Ulasan dan Rating Pengguna**: Pengguna terdaftar (Writer) dapat memberikan rating dan menulis ulasan untuk film atau acara TV yang sudah mereka tonton.
7. **Menambahkan Drama/Film/Acara TV**: Pengguna terdaftar (Writer) dapat menambahkan data Drama baru.
8. **Validasi Ulasan dan Data Drama Baru**: Admin dapat menerima atau menolak ulasan/komentar serta data drama yang dibuat oleh writer.

## Teknologi

- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS, ReactJS
- **Backend**: Laravel 11
- **Database**: PostgreSQL

## Anggota Kelompok 7

- Muhamad Fahri Yuwan Dwi Putra - D4 3B - 221524047
- Rafif Shabi Prasetyo - D4 3B - 221524055

## Cara Install
<p style="font-size: 18px;">Follow the steps below to set up the application:</p>

<ol style="font-size: 16px; line-height: 1.6;">
  <li><strong>Clone the repository and install the dependencies:</strong>
    <pre><code>git clone https://github.com/FahriYuwan/WebsiteFilmFinder/tree/main/film-finder-FE_BE/film-finder-LarIneReact.git</code></pre>
  </li>
  <li><strong>Copy the <code>.env.example</code> file inside the <b>server folder</b> and rename it to <code>.env</code>.</strong></li>
  <li><strong>Fill in the <code>.env</code> file inside <b>server</b> folder with your own configuration.</strong></li>
  <li><strong>Copy the <code>.env.example</code> file inside the <b>database folder</b> and rename it to <code>.env</code>.</strong></li>
  <li><strong>Fill in the <code>.env</code> file inside <b>database</b> folder with your own configuration.</strong></li>
</ol>

<h1 style="text-align: center; color: #2196F3;">Installation (Local)</h1>

<ul style="font-size: 16px; line-height: 1.6;">
  <li><strong>Composer</strong><br>
    <pre><code>composer install</code></pre>
  </li>
  <li><strong>React</strong><br>
    <pre><code>npm install</code></pre>
  </li>
</ul>

<p style="font-size: 16px;">Set application key</p>
<pre><code>php artisan key:generate --ansi</code></pre>

<p style="font-size: 16px;">Execute migrations and seed data</p>
<pre><code>php artisan migrate --seed</code></pre>

<p style="font-size: 16px;">Start Vite server</p>
<pre><code>npm run dev</code></pre>

<p style="font-size: 16px;">Start Laravel server</p>
<pre><code>php artisan serve</code></pre>


## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

### License

React is [MIT licensed](./LICENSE).
