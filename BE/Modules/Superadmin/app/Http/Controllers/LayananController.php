<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\Kategori;
use Modules\Superadmin\Models\KonfigurasiUmum;
use Modules\Superadmin\Models\Layanan;
use Modules\Superadmin\Models\Produk;

class LayananController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'dataKategori'      => Kategori::domain()->orderBy('urutan')->get(),
            'dataStatus'        => ["On", "Off"],
            'Konfigurasi'       => $KonfigurasiUmum
        ];

        return inertia('Superadmin/Layanan', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'title'             => 'Tambah Layanan',
            'dataKategori'      => Kategori::domain()->orderBy('urutan')->get()->map(function ($data) {
                return [
                    'value'     => $data->id,
                    'label'     => $data->nama
                ];
            }),
            'dataLayanan'       => [],
            'routeForm'         => url('superadmin/layanan'),
            'Konfigurasi'       => $KonfigurasiUmum
        ];

        return inertia('Superadmin/LayananForm', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'gambar'            => 'required|image|max:1000',
            'banner'            => 'required|image|max:1000',
            'kategori'          => 'required',
            'nama'              => 'required',
            'subnama'           => 'required',
            'slug'              => 'required',
            'deskripsi_akun'    => 'required',
            'deskripsi_game'    => 'required',
        ], [
            'gambar.required'               => str()->title(':attribute') . ' wajib diisi',
            'banner.required'               => str()->title(':attribute') . ' wajib diisi',
            'kategori.required'             => str()->title(':attribute') . ' wajib diisi',
            'nama.required'                 => str()->title(':attribute') . ' wajib diisi',
            'subnama.required'              => str()->title(':attribute') . ' wajib diisi',
            'slug.required'                 => str()->title(':attribute') . ' wajib diisi',
            'deskripsi_akun.required'       => 'Deskripsi Akun wajib diisi',
            'deskripsi_game.required'       => 'Deskripsi Game wajib diisi',

            'gambar.image'                  => str()->title(':attribute') . ' harus berupa gambar',
            'banner.image'                  => str()->title(':attribute') . ' harus berupa gambar',

            'gambar.size'                   => str()->title(':attribute') . ' ukuran file > 1MB',
            'banner.size'                   => str()->title(':attribute') . ' ukuran file > 1MB',
        ]);

        $layanan                    = new Layanan;
        $layanan->kategori_id       = $request->kategori;
        $layanan->nama              = $request->nama;
        $layanan->sub_nama          = $request->subnama;
        $layanan->slug              = $request->slug;
        $layanan->deskripsi_game    = $request->deskripsi_game;
        $layanan->deskripsi_akun    = $request->deskripsi_akun;

        $gambar = uploadFile('layanan', $request->gambar);
        $layanan->gambar            = storeImage($gambar);

        $banner = uploadFile('layanan', $request->banner);
        $layanan->banner            = storeImage($banner);

        $layanan->save();

        return redirect('/superadmin/layanan')->with('success', 'Layanan Berhasil di-Tambah');
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
    public function edit($slug)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $layanan = Layanan::firstWhere('slug', $slug);

        $data = [
            'title'             => 'Edit Layanan',
            'dataKategori'      => Kategori::domain()->orderBy('urutan')->get()->map(function ($data) {
                return [
                    'value'     => $data->id,
                    'label'     => $data->nama
                ];
            }),
            'dataLayanan'       => $layanan,
            'routeForm'         => url('superadmin/layanan/' . enc($layanan->id)),
            'Konfigurasi'       => $KonfigurasiUmum
        ];

        return inertia('Superadmin/LayananForm', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $id = dec($id);

        $layanan                    = Layanan::find($id);
        $layanan->kategori_id       = $request->kategori;
        $layanan->nama              = $request->nama;
        $layanan->sub_nama          = $request->subnama;
        $layanan->slug              = $request->slug;
        $layanan->deskripsi_game    = $request->deskripsi_game;
        $layanan->deskripsi_akun    = $request->deskripsi_akun;

        if ($request->hasFile('gambar')) {
            deleteFile($layanan->gambar);
            $gambar = uploadFile('layanan', $request->gambar);
            $layanan->gambar            = storeImage($gambar);
        }

        if ($request->hasFile('banner')) {
            deleteFile($layanan->banner);
            $banner = uploadFile('layanan', $request->banner);
            $layanan->banner            = storeImage($banner);
        }

        $layanan->save();

        return redirect('/superadmin/layanan')->with('success', 'Layanan Berhasil Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $layanan = Layanan::find($id);
        $Produk  = Produk::where('layanan_id', $id)->count();

        if ($Produk > 0) {
            return back()->with('danger', 'Masih Ada Relasi Produk');
        }

        deleteFile($layanan->gambar);
        deleteFile($layanan->banner);

        $layanan->delete();

        return redirect('/superadmin/layanan')->with('success', 'Layanan Berhasil di-Hapus');
    }

    public function ajax(Request $request)
    {
        if ($request->tipe == "pagination_layanan") {
            $page = $request->page;
            $countPage = $request->countPage;
            $noAwalAsli = ($countPage * $page) - $countPage;

            $data    = Layanan::domain();

            if ($request->has('kategori') && !is_null($request->kategori)) {
                $data->where('kategori_id', $request->kategori);
            }

            if ($request->has('status') && !is_null($request->status)) {
                $no = $request->status == "On" ? 1 : 0;
                $data->where('status', $no);
            }

            $total = $data->count();
            $data->limit($countPage)->offset($noAwalAsli);
            $total_pages = ceil($total / $countPage);

            $noAkhir = $total < ($countPage * $page) ? $total : ($countPage * $page);
            $noAwal  = $noAwalAsli == 0 ? ($total == 0 ? 0 : 1) : $noAwalAsli + 1;

            return [
                'data'          => $data->get(),
                'noAwal'        => $noAwal,
                'listPage'      => $noAwal . "-" . $noAkhir . " dari " . $total,
                'total_pages'   => $total_pages,
                'page'          => $page
            ];
        }
    }
}
