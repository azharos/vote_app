<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Modules\Superadmin\Models\KonfigurasiUmum;
use Spatie\Permission\Models\Role;

Route::get('/setup', function () {
    $namaDomain = env('DOMAIN', 'aostore.my.id');

    $salt   = uniqid(mt_rand(), true);
    $role = Role::findById(1);
    $user = User::create([
        'nama_domain'   => $namaDomain,
        'namaLengkap'   => 'Azhar OS',
        'username'      => 'aostore',
        'email'         => 'aostore@gmail.com',
        'role_id'       => $role->id,
        'salt'          => $salt,
        'password'      => Hash::make($salt . 'password'),
        'foto'          => storeImage('user'),
        'date_at'       => date('Y-m-d H:i:s'),
    ]);

    $user->syncRoles($role);

    KonfigurasiUmum::create([
        'nama_domain'   => $namaDomain,
    ]);

    return 'sukses';
});

Route::get('login', [AuthController::class, 'login'])->name('login');
Route::post('login', [AuthController::class, 'auth'])->name('auth');

Route::get('register', [AuthController::class, 'register'])->name('register');

Route::get('verify-otp', [AuthController::class, 'verifyOtp'])->name('verifyOtp');

Route::post('logout', [AuthController::class, 'logout']);
