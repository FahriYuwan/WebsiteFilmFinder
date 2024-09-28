<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Film;

class DetailPageController extends Controller
{
    public function show($film_id)
    {
        $film = Film::with(['genres', 'availabilities', 'actors', 'awards', 'reviews.user'])->findOrFail($film_id);
        return Inertia::render('DetailPage/DetailPage', [
            'film' => $film
        ]);
    }   
}
