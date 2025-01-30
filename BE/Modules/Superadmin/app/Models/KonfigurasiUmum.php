<?php

namespace Modules\Superadmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class KonfigurasiUmum extends Model
{
    use HasFactory;

    protected $table = 'konfigurasi_umum';
    protected $guarded = [];
    public $timestamps = false;
}
