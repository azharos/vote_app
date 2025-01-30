<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\PaymentFactory;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'payment';
    protected $guarded = [];
    public $timestamps = false;

    protected $with = ['payment_metode'];

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

    public function payment_metode()
    {
        return $this->belongsTo(PaymentMetode::class, 'payment_metode_id');
    }
}
