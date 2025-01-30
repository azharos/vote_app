<?php

namespace Modules\FrontEnd\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\KonfigurasiUmum;

class FrontEndController extends Controller
{
    public function index(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Home', $data);
    }

    public function games(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Games', $data);
    }

    public function reviews(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Reviews', $data);
    }

    public function invoices(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Invoices', $data);
    }

    public function pembayaran(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Pembayaran', $data);
    }

    public function leaderboard(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Leaderboard', $data);
    }
}
