<?php
namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class BookmarkController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->film_id);
        error_log('Storing a new bookmark');
        $request->validate([
            'film_id' => 'required|exists:films,film_id',
        ]);

        Bookmark::create([
            'user_id' => Auth::id(),
            'film_id' => $request->film_id,
        ]);

        return back();
    }

    public function destroy($filmId)
    {
        Bookmark::where('user_id', Auth::id())->where('film_id', $filmId)->delete();

        return back();
    }
}