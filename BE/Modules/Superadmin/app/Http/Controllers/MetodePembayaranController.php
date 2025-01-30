<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\KonfigurasiUmum;
use Modules\Superadmin\Models\Payment;
use Modules\Superadmin\Models\PaymentMetode;

class MetodePembayaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $dataKategori = PaymentMetode::groupBy('kategori')->orderBy('kategori')->pluck('kategori')->toArray();

        $newDataKategori = [];
        foreach ($dataKategori as $value) {
            $newDataKategori[] = [
                'value' => $value,
                'label' => $value
            ];
        }

        $dataGambarMetode = PaymentMetode::get();

        $data = [
            'dataPayment'       => Payment::domain()->get(),
            'dataKategori'      => $newDataKategori,
            'dataGambarMetode'  => $dataGambarMetode,
            'Konfigurasi'       => $KonfigurasiUmum
        ];

        return inertia('Superadmin/Metode', $data);
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
        $request->validate([
            'kategori'      => 'required',
            'gambar'        => 'required',
            'metode'        => 'required',
        ], [
            'kategori.required'     => 'Kategori Wajib Diisi',
            'gambar.required'       => 'Gambar Wajib Diisi',
            'metode.required'       => 'Metode Wajib Diisi',
        ]);

        $payment                = Payment::find($request->id);
        $session                = 'Payment Berhasil Update';

        if (is_null($payment)) {
            $payment    = new Payment;
            $session    = 'Payment Berhasil di-Tambah';
        }

        $paymentMetode          = PaymentMetode::firstWhere('foto', $request->gambar);
        $payment->payment_metode_id = $paymentMetode->id;

        $payment->metode            = $request->metode;
        $payment->save();

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
        Payment::destroy($id);

        return back()->with('success', 'Payment Berhasil di-Hapus');
    }
}
