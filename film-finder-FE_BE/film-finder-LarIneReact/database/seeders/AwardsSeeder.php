<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AwardsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('awards')->insert([
            [
                'award_name' => 'Academy Award',
                'year' => 2020,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'award_name' => 'Golden Globe',
                'year' => 2021,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
