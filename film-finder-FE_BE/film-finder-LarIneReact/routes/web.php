<?php

use App\Http\Controllers\DetailPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use GuzzleHttp\Middleware;
use Inertia\Inertia;
use Illuminate\Http\Request;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Home/introduction', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/profile', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/reviews', [DetailPageController::class, 'store'])->name('reviews.store');

Route::get('/api/search',[SearchController::class, 'search']);
Route::get('/detailpage/{film_id}', [DetailPageController::class, 'show'])->name('movie.show');

Route::get('/searchresultpage', [SearchController::class, 'search'])->name('searchresultpage.show');

Route::get('/cmsusers', function () {
    return Inertia::render('CMS/CMSUsers/CMSUsers');
})->name('cmsuser');

Route::get('/cmscomments', function () {
    return Inertia::render('CMS/CMSComments/CMSComments');
})->name('cmscomments');

Route::get('/cmsactors', function () {
    return Inertia::render('CMS/CMSActors/CMSActors');
})->name('cmsactors');

Route::get('/cmsgenres', function () {
    return Inertia::render('CMS/CMSGenres/CMSGenres');
})->name('cmsgenres');

Route::get('/cmsawards', function () {
    return Inertia::render('CMS/CMSAwards/CMSAwards');
})->name('cmsawards');

Route::get('/cmscountries', function () {
    return Inertia::render('CMS/CMSCountries/CMSCountries');
})->name('cmscountries');

Route::get('/cmsdramainput', function () {
    return Inertia::render('CMS/CMSDramaInput/CMSDramaInput');
})->name('cmsdramainput');

Route::get('/cmsdrama', function () {
    return Inertia::render('CMS/CMSDrama/CMSDrama');
})->name('cmsdrama');
Route::get('/home', [HomeController::class, 'index'])->name('home');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/home', [HomeController::class, 'index'] )->middleware(['auth', 'verified'])->name('home');
// Route::get('/welcome', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth','verified'],)->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('email/verify', function () {
    return Inertia::render('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

Route::get('email/verify/{id}/{hash}', function () {
    return Inertia::render('Auth/VerifyEmail');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::get('email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

require __DIR__.'/auth.php';
