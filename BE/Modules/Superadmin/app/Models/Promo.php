<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\PromoFactory;

class Promo extends Model
{
    use HasFactory;

    protected $table = 'promo';
    protected $guarded = [];
    public $timestamps = false;

    static function domain()
    {
        return static::where('nama_domain', env('DOMAIN'));
    }

    protected static function boot()
    {
        parent::boot();

        // auto sets values on creation
        static::creating(function ($query) {
            $query->nama_domain = env('DOMAIN');
            $query->date_at     = date('Y-m-d H:i:s');
        });
    }
}
