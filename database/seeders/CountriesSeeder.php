<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountriesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('countries')->insert([
            [
                'country_name' => 'United States',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'country_name' => 'Canada',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
