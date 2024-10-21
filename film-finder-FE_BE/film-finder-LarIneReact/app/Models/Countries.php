<?php
namespace App\Models;

use illuminate\Database\Eloquent\Model;

class Countries extends Model
{
    protected $table = 'countries';
    protected $primaryKey = 'counties_id';

    protected $fillable = [
        'country_name'
    ];
    public function films()
    {
        return $this->hasMany(Film::class, 'countries_id', 'countries_id');
    }
}