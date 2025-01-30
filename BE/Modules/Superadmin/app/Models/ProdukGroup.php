<?php

namespace Modules\Superadmin\Models;

use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\ProdukGroupFactory;

class ProdukGroup extends Model
{
    use HasFactory;

    protected $table = 'produk_group';
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
        });
    }
}
