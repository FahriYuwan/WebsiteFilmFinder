<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilmGenreSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('film_genre')->insert([
            [
                'film_id' => 1, // Assuming 'Inception'
                'genre_id' => 1, // Assuming 'Action'
            ],
        ]);
    }
}
