<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('film_award', function (Blueprint $table) {
            $table->foreignId('film_id')->constrained('films', 'film_id');
            $table->foreignId('award_id')->constrained('awards', 'award_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('film_awards');
    }
};
