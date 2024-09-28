<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('reviews')->insert([
            [
                'rating_user' => 3,
                'review_text' => 'Incredible movie!',
                'review_date' => now(),
                'status' => 'approved',
                'film_id' => 1, // Assuming 'Inception'
                'user_id' => 1, // Assuming user with ID 1
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
