<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\Kategori;
use Modules\Superadmin\Models\KonfigurasiUmum;
use Modules\Superadmin\Models\Layanan;
use Modules\Superadmin\Models\Produk;
use Modules\Superadmin\Models\ProdukGroup;
use Modules\Superadmin\Models\ProdukIcon;
use Modules\Superadmin\Models\ProdukOwner;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));
        $dataProduk         = Produk::domain()->orderBy('date_at', 'desc');

        if ($request->has('layanan') && !is_null($request->layanan)) {
            $dataProduk->where('layanan_id', $request->layanan);
        }

        if ($request->has('status') && !is_null($request->status)) {
            $dataProduk->where('status', $request->status == "On" ? true : false);
        }

        $data = [
            'Konfigurasi'   => $KonfigurasiUmum,
            'dataLayanan'   => Layanan::domain()->get(),
            'dataStatus'    => ['On', 'Off']
        ];

        return inertia('Superadmin/Produk', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'title'         => 'Tambah Produk',
            'Konfigurasi'   => $KonfigurasiUmum,
            'dataKategori'  => Kategori::domain()->get()->map(function ($data) {
                return [
                    'value' => $data->id,
                    'label' => $data->nama
                ];
            }),
            'dataProdukGroup'  => ProdukGroup::domain()->get()->map(function ($data) {
                return [
                    'value' => $data->id,
                    'label' => $data->nama
                ];
            }),
            'dataIcons'     => ProdukIcon::domain()->get()
        ];

        return inertia('Superadmin/ProdukForm', $data);
    }

    public function create_skuCode($skuCode)
    {
        $Produk = Produk::firstWhere('skuCode', $skuCode);

        if (!is_null($Produk)) {
            return back()->with('danger', 'SKU Code ' . $skuCode . ' Sudah Ada !!!');
        }

        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'produkOwner'   => ProdukOwner::firstWhere('skuCode', $skuCode),
            'title'         => 'Tambah Produk',
            'Konfigurasi'   => $KonfigurasiUmum,
            'dataKategori'  => Kategori::domain()->get()->map(function ($data) {
                return [
                    'value' => $data->id,
                    'label' => $data->nama
                ];
            }),
            'dataProdukGroup'  => ProdukGroup::domain()->get()->map(function ($data) {
                return [
                    'value' => $data->id,
                    'label' => $data->nama
                ];
            }),
            'dataIcons'     => ProdukIcon::domain()->get(),
            'Produk'        => '',
            'routeForm'     => url('/superadmin/produk'),
        ];

        return inertia('Superadmin/ProdukFormSKuCode', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'kategori_id'               => 'required',
            'layanan_id'                => 'required',
            'produk_group_id'           => 'required',
            'skuCode'                   => 'required',
            'nama'                      => 'required',
            'harga_asli'                => 'required',
            'margin_harga_tamu'         => 'required',
            'margin_harga_member'       => 'required',
        ], [
            'kategori_id.required'      => 'Kategori wajib diisi',
            'layanan_id.required'       => 'Layanan wajib diisi',
            'produk_group_id.required'  => 'Produk Group wajib diisi',
            'skuCode.required'          => 'SKU Code wajib diisi',
            'nama.required'             => 'Nama wajib diisi',
            'harga_asli.required'       => 'Harga Asli wajib diisi',
            'margin_harga_tamu.required'    => 'Margin Harga Tamu wajib diisi',
            'margin_harga_member.required'  => 'Margin Harga Member wajib diisi',
        ]);

        $Produk                 = new Produk;
        $Produk->kategori_id    = $request->kategori_id;
        $Produk->layanan_id     = $request->layanan_id;

        $ProdukGroup    = ProdukGroup::domain()->where(function ($q) use ($request) {
            $q->where('nama', $request->produk_group_id);
            $q->orWhere('id', $request->produk_group_id);
        })->first();

        if (is_null($ProdukGroup)) {
            $ProdukGroup        = new ProdukGroup;
            $ProdukGroup->nama  = $request->produk_group_id;
            $ProdukGroup->save();
        }

        $Produk->produk_group_id    = $ProdukGroup->id;

        if ($request->icon_id != '/image/no_image.jpg') {
            $ProdukIcon             = ProdukIcon::domain()->where('gambar', $request->icon_id)->first();
            $Produk->produk_icon_id = $ProdukIcon->id;
        }

        $Produk->status                 = $request->status;
        $Produk->skuCode                = $request->skuCode;
        $Produk->nama_produk            = $request->nama;
        $Produk->keterangan             = $request->keterangan;
        $Produk->margin_harga_tamu      = clearNum($request->margin_harga_tamu);
        $Produk->margin_harga_member    = clearNum($request->margin_harga_member);
        $Produk->save();

        return redirect('/superadmin/produk')->with('success', 'Produk Berhasil di-Tambah');
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
    public function edit($skuCode)
    {
        $Produk             = Produk::firstWhere('skuCode', $skuCode);
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'produkOwner'   => ProdukOwner::firstWhere('skuCode', $skuCode),
            'title'         => 'Edit Produk',
            'Konfigurasi'   => $KonfigurasiUmum,
            'dataKategori'  => Kategori::domain()->get()->map(function ($data) {
                return [
                    'value' => $data->id,
                    'label' => $data->nama
                ];
            }),
            'dataProdukGroup'  => ProdukGroup::domain()->get()->map(function ($data) {
                return [
                    'value' => $data->id,
                    'label' => $data->nama
                ];
            }),
            'dataIcons'     => ProdukIcon::domain()->get(),
            'Produk'        => $Produk,
            'routeForm'     => url('/superadmin/produk/' . $Produk->skuCode),
        ];

        return inertia('Superadmin/ProdukFormSKuCode', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $skuCode)
    {
        $Produk                 = Produk::firstWhere('skuCode', $skuCode);
        $Produk->kategori_id    = $request->kategori_id;
        $Produk->layanan_id     = $request->layanan_id;

        $ProdukGroup    = ProdukGroup::domain()->where(function ($q) use ($request) {
            $q->where('nama', $request->produk_group_id);
            $q->orWhere('id', $request->produk_group_id);
        })->first();

        if (is_null($ProdukGroup)) {
            $ProdukGroup        = new ProdukGroup;
            $ProdukGroup->nama  = $request->produk_group_id;
            $ProdukGroup->save();
        }

        $Produk->produk_group_id    = $ProdukGroup->id;
        $Produk->produk_icon_id     = NULL;

        if ($request->icon_id != '/image/no_image.jpg') {
            $ProdukIcon             = ProdukIcon::domain()->where('gambar', $request->icon_id)->first();
            $Produk->produk_icon_id = $ProdukIcon->id;
        }

        $Produk->status                 = $request->status;
        $Produk->nama_produk            = $request->nama;
        $Produk->keterangan             = $request->keterangan;
        $Produk->margin_harga_tamu      = clearNum($request->margin_harga_tamu);
        $Produk->margin_harga_member    = clearNum($request->margin_harga_member);
        $Produk->save();

        return redirect('/superadmin/produk')->with('success', 'Produk Berhasil di-Tambah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Produk::destroy($id);
        return redirect('/superadmin/produk')->with('success', 'Produk Berhasil di-Hapus');
    }

    public function icon(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'       => $KonfigurasiUmum,
            'dataIcon'          => ProdukIcon::domain()->orderBy('id', 'desc')->get()
        ];

        return inertia('Superadmin/ProdukIcon', $data);
    }

    public function iconStore(Request $request)
    {
        $request->validate([
            'files' => 'required'
        ], [
            'files.required'    => 'Wajib Diisi'
        ]);

        foreach ($request->file('files') as $file) {
            $nama   = uploadFile('icon', $file);
            ProdukIcon::create([
                'gambar'  => storeImage($nama),
            ]);
        }

        return back()->with('success', 'Icon Berhasil di-Tambah');
    }

    public function iconDestroy($id)
    {
        $produkIcon = ProdukIcon::find($id);

        Produk::where('produk_icon_id', $id)->update([
            'produk_icon_id'    => NULL
        ]);

        deleteFile($produkIcon->gambar);
        $produkIcon->delete();

        return back()->with('success', 'Icon Berhasil di-Hapus');
    }

    public function ajax(Request $request)
    {
        if ($request->tipe == "kategori") {
            return Layanan::domain()->where('kategori_id', $request->kategori_id)->get()->map(function ($dt) {
                return [
                    'value'     => $dt->id,
                    'label'     => $dt->nama
                ];
            });
        } else if ($request->tipe == "sku_code") {
            $ProdukOwner = ProdukOwner::firstWhere('skuCode', $request->skuCode);

            if (is_null($ProdukOwner)) {
                return [
                    'status'    => false,
                    'message'   => "SKU Code Tidak Ada !!!"
                ];
            }

            $Produk = Produk::firstWhere('skuCode', $request->skuCode);
            if (is_null($Produk)) {
                return [
                    'status'    => true,
                    'message'   => ProdukOwner::firstWhere('skuCode', $request->skuCode)
                ];
            } else {
                return [
                    'status'    => false,
                    'message'   => "SKU Code sudah ditambahkan dalam Produk"
                ];
            }
        } else if ($request->tipe == "kategori_import") {
            return ProdukOwner::select('brand')->where('kategori', $request->kategori)->groupBy('brand')->orderBy('brand')->get()->map(function ($dt) {
                return [
                    'value'     => $dt->brand,
                    'label'     => $dt->brand
                ];
            });
        } else if ($request->tipe == "brand_import") {
            return ProdukOwner::select('type')->where('brand', $request->brand)->groupBy('type')->orderBy('type')->get()->map(function ($dt) {
                return [
                    'value'     => $dt->type,
                    'label'     => $dt->type
                ];
            });
        } else if ($request->tipe == "kategori_internal") {
            return Layanan::domain()->where('kategori_id', $request->kategori)->orderBy('urutan')->get()->map(function ($dt) {
                return [
                    'value'     => $dt->id,
                    'label'     => $dt->nama
                ];
            });
        } else if ($request->tipe == "pagination_mutasi") {
            $page = $request->page;
            $countPage = $request->countPage;
            $noAwalAsli = ($countPage * $page) - $countPage;

            $data       = ProdukOwner::where('kategori', $request->kategori)->where('brand', $request->brand);

            $arrSkuCode = Produk::groupBy('skuCode')->pluck('skuCode')->toArray();
            $data->whereNotIn('skuCode', $arrSkuCode);

            if (!is_null($request->tipeProvider)) {
                $data->where('type', $request->tipeProvider);
            }

            $total = $data->count();
            $data->limit($countPage)->offset($noAwalAsli)->orderBy('hargaProduk');
            $total_pages = ceil($total / $countPage);

            $noAkhir = $total < ($countPage * $page) ? $total : ($countPage * $page);
            $noAwal  = $noAwalAsli == 0 ? 1 : $noAwalAsli + 1;

            return [
                'data'          => $data->get(),
                'noAwal'        => $noAwal,
                'listPage'      => $noAwal . "-" . $noAkhir . " dari " . $total,
                'total_pages'   => $total_pages,
                'page'          => $page
            ];
        } else if ($request->tipe == "pagination_produk") {
            $page = $request->page;
            $countPage = $request->countPage;
            $noAwalAsli = ($countPage * $page) - $countPage;

            $data       = Produk::domain()->orderBy('date_at', 'desc');

            if ($request->has('layanan') && !is_null($request->layanan)) {
                $data->where('layanan_id', $request->layanan);
            }

            if ($request->has('status') && !is_null($request->status)) {
                $data->where('status', $request->status == "On" ? true : false);
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

    public function mutasi()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'           => $KonfigurasiUmum,
            'dataKategoriOwner'     => ProdukOwner::select('kategori')->groupBy('kategori')->get()->map(function ($dt) {
                return [
                    'value' => $dt->kategori,
                    'label' => $dt->kategori
                ];
            }),
            'dataKategoriInternal'  => Kategori::domain()->orderBy('urutan')->get()->map(function ($dt) {
                return [
                    'value' => $dt->id,
                    'label' => $dt->nama
                ];
            }),
            'dataProdukGroup'       => ProdukGroup::domain()->get()->map(function ($dt) {
                return [
                    'value' => $dt->id,
                    'label' => $dt->nama
                ];
            })
        ];

        return inertia('Superadmin/ProdukMutasi', $data);
    }

    public function mutasiStore(Request $request)
    {
        $ProdukGroup    = ProdukGroup::domain()->where(function ($q) use ($request) {
            $q->where('nama', $request->produk_group);
            $q->orWhere('id', $request->produk_group);
        })->first();

        if (is_null($ProdukGroup)) {
            $ProdukGroup        = new ProdukGroup;
            $ProdukGroup->nama  = $request->produk_group;
            $ProdukGroup->save();
        }

        foreach ($request->data as $data) {
            $Produk                     = new Produk;
            $Produk->kategori_id        = $request->kategori;
            $Produk->layanan_id         = $request->layanan;
            $Produk->produk_group_id    = $ProdukGroup->id;
            $Produk->skuCode            = $data['skuCode'];
            $Produk->nama_produk        = $data['namaProduk'];
            $Produk->margin_harga_tamu  = $data['marginHargaTamu'];
            $Produk->margin_harga_member = $data['marginHargaMember'];
            $Produk->save();
        }

        return back()->with('success', 'Mutasi Produk Berhasil');
    }

    public function kelompok()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'           => $KonfigurasiUmum,
            'dataProdukGroup'       => ProdukGroup::domain()->get()->map(function ($dt) {
                return [
                    'id'            => $dt->id,
                    'nama'          => $dt->nama,
                    'jumlah_produk' => Produk::domain()->where('produk_group_id', $dt->id)->count(),
                ];
            })
        ];

        return inertia('Superadmin/ProdukKelompok', $data);
    }

    public function kelompokStore(Request $request)
    {
        $ProdukGroup = ProdukGroup::find($request->id);

        if (is_null($ProdukGroup)) {
            $ProdukGroup    = new ProdukGroup;
        }

        $ProdukGroup->nama  = $request->nama;
        $ProdukGroup->save();
        return back()->with('success', 'Kelompok Produk Berhasil Disimpan');
    }

    public function kelompokDestroy($id)
    {
        $produkGroup = ProdukGroup::find($id);

        $produk = Produk::where('produk_group_id', $id)->count();
        if ($produk > 0) {
            return back()->with('danger', 'Masih Ada Relasi Produk');
        }

        $produkGroup->delete();

        return back()->with('success', 'Kelompok Produk Berhasil di-Hapus');
    }
}
