<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('genres')->insert([
            [
                'genre_name' => 'Action',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'genre_name' => 'Drama',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
