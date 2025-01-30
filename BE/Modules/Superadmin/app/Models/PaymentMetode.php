<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\PaymentMetodeFileFactory;

class PaymentMetode extends Model
{
    use HasFactory;

    protected $table = 'payment_metode';
    protected $guarded = [];
    public $timestamps = false;
}
