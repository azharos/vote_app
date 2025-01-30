<?php

namespace Modules\Member\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\KonfigurasiUmum;


class MemberController extends Controller
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

        return inertia('Member/Dashboard', $data);
    }

    public function mutasi()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];
        return inertia('Member/Mutasi', $data);
    }

    public function laporan()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Member/Laporan', $data);
    }

    public function transaksi()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Member/Transaksi', $data);
    }

    public function reload()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Member/Reload', $data);
    }

    public function reloadTopup()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Member/ReloadTopup', $data);
    }
}
