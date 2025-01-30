<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\KonfigurasiUmum;
use Modules\Superadmin\Models\Layanan;
use Modules\Superadmin\Models\Promo;

class PromoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'       => $KonfigurasiUmum,
        ];

        return inertia('Superadmin/Promo', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'title'             => "Tambah Promo",
            'Konfigurasi'       => $KonfigurasiUmum,
            'routeForm'         => url('/superadmin/promo'),
            'promoEndDate'      => date('d/m/Y'),
            'dataPilihanPromo'  => [
                [
                    "label"     => "Layanan",
                    "value"     => "Layanan",
                ],
                [
                    "label"     => "Limit Harian",
                    "value"     => "Limit Harian",
                ],
            ],
            'dataLayanan'       => Layanan::domain()->orderBy('urutan')->get()->map(function ($dt) {
                return [
                    'label'     => $dt->nama,
                    'value'     => $dt->nama,
                ];
            }),
            'dataPromo'         => ''
        ];

        return inertia('Superadmin/PromoForm', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'kodePromo'                 => 'required',
            'hargaPromo'                => 'required',
            'limitUser'                 => 'required',
            'status'                    => 'required',
            'minBeli'                   => 'required',
            'limitHarian'               => 'required_if:pilihanPromo,Limit Harian',
            'Layanan'                   => 'required_if:pilihanPromo,Layanan',
        ], [
            'kodePromo.required'        => 'Kode Promo wajib diisi',
            'hargaPromo.hargaPromo'     => 'Harga Promo wajib diisi',
            'limitUser.required'        => 'Limit User wajib diisi',
            'status.required'           => 'Status wajib diisi',
            'minBeli.required'          => 'Minimum Pembelian wajib diisi',
            'limitHarian.required_if'   => 'Limit Harian wajib diisi',
            'layanan.required_if'       => 'Layanan wajib diisi',
        ]);

        $Promo                          = new Promo;
        $Promo->kode_promo              = $request->kodePromo;
        $Promo->harga_promo             = clearNum($request->hargaPromo);
        $Promo->batas_penggunaan_user   = clearNum($request->limitUser);
        $Promo->status                  = $request->status;
        $Promo->min_beli                = clearNum($request->minBeli);
        $Promo->pilihan_promo           = $request->pilihanPromo;

        if ($request->pilihanPromo == "Limit Harian") {
            $Promo->limit_harian        = $request->limitHarian;
            $Promo->sisa_limit          = 0;
        }

        if ($request->pilihanPromo == "Layanan") {
            $Promo->layanan             = $request->layanan;
        }

        $Promo->tanggal_awal_promo      = convert_date_javascript_to_php($request->tanggalPromo['startDate'], 'Y-m-d');
        $Promo->tanggal_akhir_promo     = convert_date_javascript_to_php($request->tanggalPromo['endDate'], 'Y-m-d');

        $Promo->save();

        return redirect('/superadmin/promo')->with('success', 'Promo Berhasil di-Tambah');
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
    public function edit($kode_promo)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));
        $dataPromo          = Promo::firstWhere('kode_promo', $kode_promo);

        $promoEndDate       = date('d/m/Y', strtotime($dataPromo->tanggal_akhir_promo));

        $dataPromo['tanggal_awal_promo']    = convert_date_php_to_javascript($dataPromo->tanggal_awal_promo);
        $dataPromo['tanggal_akhir_promo']   = convert_date_php_to_javascript($dataPromo->tanggal_akhir_promo);

        $data = [
            'title'             => "Tambah Promo",
            'Konfigurasi'       => $KonfigurasiUmum,
            'routeForm'         => url('/superadmin/promo/' . enc($dataPromo->id)),
            'promoEndDate'      => $promoEndDate,
            'dataPilihanPromo'  => [
                [
                    "label"     => "Layanan",
                    "value"     => "Layanan",
                ],
                [
                    "label"     => "Limit Harian",
                    "value"     => "Limit Harian",
                ],
            ],
            'dataLayanan'       => Layanan::domain()->orderBy('urutan')->get()->map(function ($dt) {
                return [
                    'label'     => $dt->nama,
                    'value'     => $dt->nama,
                ];
            }),
            'dataPromo'         => $dataPromo,
        ];

        return inertia('Superadmin/PromoForm', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'limitHarian'               => 'required_if:pilihanPromo,Limit Harian',
            'Layanan'                   => 'required_if:pilihanPromo,Layanan',
        ], [
            'limitHarian.required_if'   => 'Limit Harian wajib diisi',
            'layanan.required_if'       => 'Layanan wajib diisi',
        ]);

        $id = dec($id);

        $Promo                          = Promo::find($id);
        $Promo->kode_promo              = $request->kodePromo;
        $Promo->harga_promo             = clearNum($request->hargaPromo);
        $Promo->batas_penggunaan_user   = clearNum($request->limitUser);
        $Promo->status                  = $request->status;
        $Promo->min_beli                = clearNum($request->minBeli);
        $Promo->pilihan_promo           = $request->pilihanPromo;

        if ($request->pilihanPromo == "Limit Harian") {
            $Promo->limit_harian        = $request->limitHarian;
            $Promo->sisa_limit          = is_null($Promo->sisa_limit) ? 0 : $Promo->sisa_limit;
        }

        if ($request->pilihanPromo == "Layanan") {
            $Promo->layanan             = $request->layanan;
        }

        $Promo->tanggal_awal_promo      = convert_date_javascript_to_php($request->tanggalPromo['startDate'], 'Y-m-d');
        $Promo->tanggal_akhir_promo     = convert_date_javascript_to_php($request->tanggalPromo['endDate'], 'Y-m-d');

        $Promo->save();

        return redirect('/superadmin/promo')->with('success', 'Promo Berhasil Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Promo::destroy($id);
        return back()->with('success', 'Promo Berhasil di-Hapus');
    }

    public function ajax(Request $request)
    {
        if ($request->tipe == "pagination_promo") {
            $page = $request->page;
            $countPage = $request->countPage;
            $noAwalAsli = ($countPage * $page) - $countPage;

            $data       = Promo::domain()->orderBy('date_at', 'desc');

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
}
