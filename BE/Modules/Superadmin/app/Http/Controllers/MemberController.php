<?php

namespace Modules\Superadmin\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Modules\Superadmin\Models\KonfigurasiUmum;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $dataMember = User::domain();

        if ($request->has('search') && !is_null($request->search)) {
            $dataMember->where('title', 'like', '%' . $request->search . '%');
        }

        $data = [
            'dataMember'    => $dataMember->paginate(10),
            'Konfigurasi'   => $KonfigurasiUmum
        ];

        return inertia('Superadmin/Member', $data);
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
