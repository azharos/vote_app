<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\KonfigurasiUmum;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Superadmin/Dashboard', $data);
    }
}
