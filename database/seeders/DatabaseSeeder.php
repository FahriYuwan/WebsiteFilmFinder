<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
     if (DB::table('roles')->count() === 0) {
         $this->call(RoleSeeder::class);
     }
     if (DB::table('users')->count() === 0) {
         $this->call(UserSeeder::class);
     }
     if (DB::table('awards')->count() === 0) {
         $this->call(AwardsSeeder::class);
     }
     if (DB::table('genres')->count() === 0) {
        $this->call(GenreSeeder::class);
     }
     if(DB::table('countries')->count() === 0){
        $this->call(CountriesSeeder::class);
     }
     if (DB::table('actors')->count() === 0) {
        $this->call(ActorSeeder::class);
     }
     if (DB::table('films')->count() === 0) {
        $this->call(FilmSeeder::class);
     }
     if (DB::table('reviews')->count() === 0) {
        $this->call(ReviewsSeeder::class);
     }
     if (DB::table('film_genre')->count() === 0) {
        $this->call(FilmGenreSeeder::class);
     }
     if (DB::table(table: 'film_actor')->count() === 0) {
        $this->call(FilmActorSeeder::class);
     }
     if (DB::table('film_award')->count() === 0) {
        $this->call(FilmAward::class);
     }
    }
}

// public function run()
// {
//     // Menjalankan UsersTableSeeder jika tabel users kosong
//     if (DB::table('users')->count() === 0) {
//         $this->call(UsersTableSeeder::class);
//     }

//     // Menjalankan seeder lain yang mungkin tergantung
//     if (DB::table('posts')->count() === 0) {
//         $this->call(PostsTableSeeder::class);
//     }
// }

