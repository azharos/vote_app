<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\Kategori;
use Modules\Superadmin\Models\KonfigurasiUmum;
use Modules\Superadmin\Models\Layanan;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'dataKategori'  => Kategori::domain()->orderBy('urutan', 'asc')->get()->map(function ($data) {
                return [
                    "id"                => $data->id,
                    "urutan"            => $data->urutan,
                    "nama"              => $data->nama,
                    "totalLayanan"      => Layanan::where('kategori_id', $data->id)->count()
                ];
            }),
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('Superadmin/Kategori', $data);
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
        $kategori   = Kategori::find($request->id);
        $session    = 'Kategori Berhasil Update';
        $urutan     = $request->urutan;

        if (is_null($kategori)) {
            $kategori   = new Kategori;
            $session    = "Kategori Berhasil di-Tambah";

            $urutan     = Kategori::count() + 1;
        }

        $kategori->nama     = $request->kategori;
        $kategori->urutan   = $urutan;
        $kategori->save();

        return back()->with('success', $session);
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $Layanan = Layanan::where('kategori_id', $id)->count();
        if ($Layanan > 0) {
            return back()->with('danger', 'Masih Ada Relasi Layanan');
        }

        Kategori::destroy($id);

        return back()->with('success', 'Kategori Berhasil di-Hapus');
    }

    public function storeUrutan(Request $request)
    {
        foreach ($request->data as $key => $data) {
            Kategori::where('nama', $data)->update(['urutan' => $key + 1]);
        }

        return back()->with('success', 'Urutan Kategori Berhasil');
    }
}
