<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AvailabilitySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('availabilities')->insert([
            [
                'availability_name' => 'Netflix',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'availability_name' => 'Amazon Prime',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
