<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\LayananFactory;

class Layanan extends Model
{
    use HasFactory;

    protected $table = 'layanan';
    protected $guarded = [];
    public $timestamps = false;

    protected $with = ['kategori'];

    static function domain()
    {
        return static::where('nama_domain', env('DOMAIN'));
    }

    protected static function boot()
    {
        parent::boot();

        // auto sets values on creation
        static::creating(function ($query) {
            $query->urutan      = static::count() + 1;
            $query->nama_domain = env('DOMAIN');
        });
    }

    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'kategori_id');
    }
}
