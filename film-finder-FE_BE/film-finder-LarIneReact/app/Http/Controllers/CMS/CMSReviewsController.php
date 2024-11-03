<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Models\Countries;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\Review;

class CMSReviewsController extends Controller{
    public function index()
    {
        $reviews = Review::with([
            'film' => function ($query) {
                $query->select('film_id', 'title'); // Pastikan untuk menyertakan 'id' karena itu adalah kunci asing
            },
            'user' => function ($query) {
                $query->select('user_id', 'name'); // Pastikan untuk menyertakan 'id' karena itu adalah kunci asing
            }
        ])->get();
    
        return Inertia::render('CMS/CMSReviews/CMSReviews', [
            'reviews' => $reviews
        ]);
    }

    public function update(Request $request){
        $review_array = $request->review_id;
        Review::whereIn('review_id', $review_array)->update(['status' => 'approved']);
        return redirect()->route('cms.reviews.index');
    }

    public function destroy(Request $request){
        $review_array = $request->review_id;
        Review::whereIn('review_id', $review_array)->delete();
        return redirect()->route('cms.reviews.index');
    }
    
    
}