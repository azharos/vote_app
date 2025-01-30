<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\Kategori;
use Modules\Superadmin\Models\KonfigurasiUmum;
use Modules\Superadmin\Models\ProdukOwner;

class DaftarHargaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'       => $KonfigurasiUmum,
            'dataKategori'      => ProdukOwner::groupBy('kategori')->pluck('kategori'),
            'dataBrand'         => ProdukOwner::groupBy('brand')->pluck('brand'),
            'dataHarga'         => ['Termurah', 'Termahal'],
        ];

        return inertia('Superadmin/DaftarHarga', $data);
    }

    public function ajax(Request $request)
    {
        if ($request->tipe == "pagination_daftar_harga") {
            $page = $request->page;
            $countPage = $request->countPage;
            $noAwalAsli = ($countPage * $page) - $countPage;

            $data    = ProdukOwner::query();

            if ($request->has('kategori') && !is_null($request->kategori)) {
                $data->where('kategori', $request->kategori);
            }

            if ($request->has('brand') && !is_null($request->brand)) {
                $data->where('brand', $request->brand);
            }

            if ($request->has('urutanHarga') && !is_null($request->urutanHarga)) {
                if ($request->urutanHarga == "Termurah") {
                    $data->orderBy('hargaProduk', 'asc');
                } else {
                    $data->orderBy('hargaProduk', 'desc');
                }
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
