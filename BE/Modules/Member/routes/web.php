<?php

use Illuminate\Support\Facades\Route;
use Modules\Member\Http\Controllers\MemberController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth', 'role:Member'])->group(function () {
    Route::get('dashboard', [MemberController::class, 'index']);
    Route::get('dashboard/mutasi', [MemberController::class, 'mutasi']);
    Route::get('dashboard/laporan', [MemberController::class, 'laporan']);
    Route::get('dashboard/transaksi', [MemberController::class, 'transaksi']);
    Route::get('dashboard/reload', [MemberController::class, 'reload']);
    Route::get('dashboard/reload/topup', [MemberController::class, 'reloadTopup']);
});
