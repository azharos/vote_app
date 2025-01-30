<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Superadmin\Database\Factories\KonfigurasiBannerFactory;

class KonfigurasiBanner extends Model
{
    use HasFactory;

    protected $table = 'konfigurasi_banner';
    protected $guarded = [];
    public $timestamps = false;
}
