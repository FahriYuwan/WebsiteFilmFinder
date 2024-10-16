<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Film;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;

class DetailPageController extends Controller
{
    public function show($film_id)
    {
        // Tentukan kunci cache yang unik berdasarkan film_id
        $cacheKey = 'film_detail_' . $film_id;
        
        // Gunakan Cache::remember untuk menyimpan hasil query dalam cache
        $film = Cache::remember($cacheKey, 60, function () use ($film_id) {
            return Film::with(['genres', 'actors', 'awards', 'reviews.user'])->findOrFail($film_id);
        });

        return Inertia::render('DetailPage/DetailPage', [
            'film' => $film
        ]);
    }   

    public function store(Request $request)
    {
        Log::info('Request data:', $request->all()); // Tambahkan ini untuk log data

        $request->validate([
            'film_id' => 'required|integer|exists:films,film_id',
            'rating_user' => 'required|numeric|min:1|max:5',
            'review_text' => 'required|string|max:255',
        ]);

        $film = Film::findOrFail($request->film_id);

        $film->reviews()->create([
            'rating_user' => $request->rating_user,
            'review_text' => $request->review_text,
            'review_date' => now(),
            'user_id' => Auth::id(),
            'status' => 'pending'
        ]);

        // Hapus cache detail film setelah review baru ditambahkan
        Cache::forget('film_detail_' . $request->film_id);

        $this->updateFilmRating($film);

        return back()->with('success', 'Review submitted successfully!');
    }

        // Tambahkan method untuk menghitung rata-rata rating film
        protected function updateFilmRating(Film $film)
        {
            // Hitung rata-rata rating dari review yang ada
            $averageRating = $film->reviews()->avg('rating_user');
    
            // Update rating_film dengan rata-rata yang baru
            $film->update([
                'rating_film' => round($averageRating, 1)
            ]);
        }
}