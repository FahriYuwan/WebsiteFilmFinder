<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilmSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('films')->insert([
            [
                'title' => 'Inception',
                'alternative_title' => 'Beginning',
                'year_release' => 2010,
                'duration' => 148,
                'url_banner' => 'https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_07030c72.jpg?v=2024-09-22%2014:06:37',
                'url_trailer' => 'https://www.youtube.com/embed/YoHD9XEInc0',
                'rating_film' => 4.4,
                'synopsis' => 'A skilled thief is given a chance at redemption.',
                'status' => 'released',
                'countries_id' => 1,
                'availability' => 'Netflix',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
