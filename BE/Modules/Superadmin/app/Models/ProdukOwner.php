<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\ProdukOwnerFactory;

class ProdukOwner extends Model
{
    use HasFactory;

    protected $table = 'produk_owner';
    protected $guarded = [];
    public $timestamps = false;
}
