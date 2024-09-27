<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';
    protected $primaryKey = 'review_id';

    public function film()
    {
        return $this->belongsTo(Film::class, 'film_id', 'film_id');
    }
}