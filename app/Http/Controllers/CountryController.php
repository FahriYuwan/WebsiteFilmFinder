<?php

namespace App\Http\Controllers;

use App\Models\Countries;
use Inertia\Inertia;

class CountryController extends Controller
{
    /**
     * Display a listing of the countries.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $countries = Countries::all();
        dd($countries); // Debugging: pastikan data diambil dengan benar
        return Inertia::render('CMS/CMSAwards', [
            'countries' => $countries
        ]);
    }
}
