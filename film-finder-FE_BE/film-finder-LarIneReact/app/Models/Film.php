<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;
    protected $table = 'films'; // Nama tabel yang benar
    protected $primaryKey = 'film_id';

    public function reviews()
    {
        return $this->hasMany(Review::class, 'film_id', 'film_id');
    }

    public function averageRating()
    {
        return $this->reviews()->avg('rating_user');
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'film_genre', 'film_id', relatedPivotKey: 'genre_id');
    }
    // public function country()
    // {
    //     return $this->belongsTo(Country::class, 'countries_id', 'countries_id');
    // }

    // public function reviews()
    // {
    //     return $this->hasMany(Review::class, 'film_id', 'film_id');
    // }

    // public function genres()
    // {
    //     return $this->belongsToMany(Genre::class, 'film_genre', 'film_id', 'genre_id');
    // }

    // public function actors()
    // {
    //     return $this->belongsToMany(Actor::class, 'film_actor', 'film_id', 'actor_id');
    // }

    // public function reviews()
    // {
    //     return $this->hasMany(Review::class, 'film_id', 'film_id');
    // }
}
