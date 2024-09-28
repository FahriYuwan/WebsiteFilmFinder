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
                'url_banner' => 'https://example.com/inception.jpg',
                'url_trailer' => 'https://example.com/inception-trailer.mp4',
                'rating_film' => 8.8,
                'synopsis' => 'A skilled thief is given a chance at redemption.',
                'status' => 'released',
                'countries_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
