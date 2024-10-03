<?php

namespace App\Http\Controllers;

use App\Models\Film;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        // Tentukan kunci cache yang unik
        $cacheKey = 'films_page_' . $request->get('page', 1);

        // Gunakan Cache::remember untuk menyimpan hasil query dalam cache
        $films = Cache::remember($cacheKey, 60, function () {
            return Film::paginate(8); // Mengambil 8 film per halaman
        });

        return Inertia::render('Home/Home', [
            'films' => $films,
        ]);
    }
}