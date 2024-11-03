<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActorSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('actors')->insert([
            [
                'actor_name' => 'Leonardo DiCaprio',
                'url_actor' => 'https://example.com/leonardo',
                'birthdate' => '1974-11-11',
                'countries_id' => 1, // Assuming 'United States' from countries seeder
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'actor_name' => 'Brad Pitt',
                'url_actor' => 'https://example.com/brad',
                'birthdate' => '1963-12-18',
                'countries_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
