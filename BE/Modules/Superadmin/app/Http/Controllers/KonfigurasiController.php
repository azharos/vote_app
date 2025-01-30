<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\KonfigurasiUmum;

class KonfigurasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'form'  => KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'))
        ];

        return inertia('Superadmin/Konfigurasi', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('superadmin::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // 
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('superadmin::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('superadmin::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $request->validate([
            'judul'         => 'required',
            'deskripsi'     => 'required',
            'prefixOrder'   => 'required',
            'no_wa'         => 'required',
        ], [
            'judul.required'         => 'Judul Wajib Diisi',
            'deskripsi.required'     => 'Deskripsi Wajib Diisi',
            'prefixOrder.required'   => 'Prefix Order ID Wajib Diisi',
            'no_wa.required'         => 'Nomor WhatsApp Wajib Diisi',
        ]);

        $konfigurasi                = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));
        $konfigurasi->judul         = $request->judul;
        $konfigurasi->deskripsi     = $request->deskripsi;
        $konfigurasi->prefix_order  = $request->prefixOrder;

        if ($request->hasFile('logo')) {
            if (!is_null($konfigurasi->logo)) deleteFile($konfigurasi->logo);

            $logo                       = uploadFile('konfigurasi', $request->file('logo'));
            $konfigurasi->logo          = storeImage($logo);
        }

        if ($request->hasFile('icon')) {
            if (!is_null($konfigurasi->icon)) deleteFile($konfigurasi->icon);

            $icon                       = uploadFile('konfigurasi', $request->file('icon'));
            $konfigurasi->icon          = storeImage($icon);
        }

        $konfigurasi->no_wa         = $request->no_wa;
        $konfigurasi->url_ig        = $request->url_ig;
        $konfigurasi->url_tiktok    = $request->url_tiktok;
        $konfigurasi->url_youtube   = $request->url_youtube;
        $konfigurasi->url_fb        = $request->url_fb;

        $konfigurasi->save();

        return redirect('superadmin/konfigurasi')->with('success', 'Data Berhasil Disimpan');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
