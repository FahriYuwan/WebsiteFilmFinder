<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilmAward extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB :: table('film_award')->insert([
            [
                'film_id' => 1, // Assuming 'Inception'
                'award_id' => 1, // Assuming 'Best Picture'
            ]
        ]);
    }
}
