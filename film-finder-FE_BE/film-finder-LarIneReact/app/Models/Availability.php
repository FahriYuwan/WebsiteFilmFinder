<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
    use HasFactory;

    protected $table = 'availabilities'; // Nama tabel yang benar
    protected $primaryKey = 'availability_id';

    protected $fillable = ['availability_name']; // Harus berupa array

    public function films()
    {
        return $this->belongsToMany(Film::class, 'film_availability', 'availability_id', 'film_id');
    }
}