<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilmActorSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('film_actor')->insert([
            [
                'film_id' => 1, // Assuming 'Inception'
                'actor_id' => 1, // Assuming 'Leonardo DiCaprio'
            ],
        ]);
    }
}
