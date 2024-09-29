<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Film;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DetailPageController extends Controller
{
    public function show($film_id)
    {
        $film = Film::with(['genres', 'availabilities', 'actors', 'awards', 'reviews.user'])->findOrFail($film_id);
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
        return back()->with('success', 'Review submitted successfully!');
    }
}
