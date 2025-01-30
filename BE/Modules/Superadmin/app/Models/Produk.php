<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\ProdukFactory;

class Produk extends Model
{
    use HasFactory;

    protected $table = 'produk';
    protected $guarded = [];
    public $timestamps = false;

    protected $with = ['layanan:id,nama,kategori_id', 'produk_owner:id,skuCode,hargaProduk', 'icon:id,gambar', 'produk_group:id,nama'];

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

    public function layanan()
    {
        return $this->belongsTo(Layanan::class, 'layanan_id');
    }

    public function produk_owner()
    {
        return $this->belongsTo(ProdukOwner::class, 'skuCode', 'skuCode');
    }

    public function icon()
    {
        return $this->belongsTo(ProdukIcon::class, 'produk_icon_id');
    }

    public function produk_group()
    {
        return $this->belongsTo(ProdukGroup::class, 'produk_group_id');
    }
}
