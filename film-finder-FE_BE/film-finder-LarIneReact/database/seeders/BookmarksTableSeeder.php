<?php
// database/seeders/BookmarksTableSeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class BookmarksTableSeeder extends Seeder
{
    public function run()
    {
        // Pastikan Anda memiliki user_id dan film_id yang valid di tabel users dan films
        DB::table('bookmarks')->insert([
            'user_id' => 14,
            'film_id' => 3,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}