<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FilmAvailability extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('film_availability')->insert([
            [
                'availability_id' => 1, // Assuming 'Available'
                'film_id' => 1, // Assuming 'Inception'
            ]
        ]);
    }
}
