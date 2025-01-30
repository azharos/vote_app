<?php

use Illuminate\Support\Facades\Route;
use Modules\Superadmin\Http\Controllers\DaftarHargaController;
use Modules\Superadmin\Http\Controllers\DashboardController;
use Modules\Superadmin\Http\Controllers\KategoriController;
use Modules\Superadmin\Http\Controllers\KonfigurasiController;
use Modules\Superadmin\Http\Controllers\LayananController;
use Modules\Superadmin\Http\Controllers\MemberController;
use Modules\Superadmin\Http\Controllers\MetodePembayaranController;
use Modules\Superadmin\Http\Controllers\ProdukController;
use Modules\Superadmin\Http\Controllers\PromoController;
use Modules\Superadmin\Http\Controllers\SuperadminController;
use Modules\Superadmin\Http\Controllers\TopupController;

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

Route::middleware(['auth', 'role:Superadmin'])->prefix('superadmin')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index']);

    Route::get('konfigurasi', [KonfigurasiController::class, 'index']);
    Route::post('konfigurasi', [KonfigurasiController::class, 'update']);

    Route::get('member', [MemberController::class, 'index']);

    Route::get('metode-pembayaran', [MetodePembayaranController::class, 'index']);
    Route::post('metode-pembayaran', [MetodePembayaranController::class, 'store']);
    Route::delete('metode-pembayaran/{id}', [MetodePembayaranController::class, 'destroy']);

    Route::get('topup', [TopupController::class, 'index']);

    Route::get('kategori', [KategoriController::class, 'index']);
    Route::post('kategori', [KategoriController::class, 'store']);
    Route::post('kategori/urutan', [KategoriController::class, 'storeUrutan']);
    Route::delete('kategori/{id}', [KategoriController::class, 'destroy']);

    Route::get('layanan', [LayananController::class, 'index']);
    Route::get('layanan/tambah', [LayananController::class, 'create']);
    Route::get('layanan/{slug}', [LayananController::class, 'edit']);
    Route::post('layanan', [LayananController::class, 'store']);
    Route::post('layanan/ajax', [LayananController::class, 'ajax']);
    Route::post('layanan/{id}', [LayananController::class, 'update']);
    Route::delete('layanan/{id}', [LayananController::class, 'destroy']);

    Route::get('produk/kelompok', [ProdukController::class, 'kelompok']);
    Route::post('produk/kelompok', [ProdukController::class, 'kelompokStore']);
    Route::delete('produk/kelompok/{id}', [ProdukController::class, 'kelompokDestroy']);

    Route::get('produk/mutasi', [ProdukController::class, 'mutasi']);
    Route::post('produk/mutasi', [ProdukController::class, 'mutasiStore']);

    Route::get('produk/icon', [ProdukController::class, 'icon']);
    Route::post('produk/icon', [ProdukController::class, 'iconStore']);
    Route::delete('produk/icon/{id}', [ProdukController::class, 'iconDestroy']);

    Route::get('produk', [ProdukController::class, 'index']);
    Route::get('produk/tambah', [ProdukController::class, 'create']);
    Route::get('produk/tambah/{skuCode}', [ProdukController::class, 'create_skuCode']);
    Route::get('produk/edit/{skuCode}', [ProdukController::class, 'edit']);
    Route::post('produk', [ProdukController::class, 'store']);
    Route::post('produk/ajax', [ProdukController::class, 'ajax']);
    Route::post('produk/{skuCode}', [ProdukController::class, 'update']);
    Route::delete('produk/{id}', [ProdukController::class, 'destroy']);

    Route::get('daftar-harga', [DaftarHargaController::class, 'index']);
    Route::post('daftar-harga/ajax', [DaftarHargaController::class, 'ajax']);

    Route::get('promo', [PromoController::class, 'index']);
    Route::get('promo/tambah', [PromoController::class, 'create']);
    Route::get('promo/edit/{kode_promo}', [PromoController::class, 'edit']);
    Route::post('promo', [PromoController::class, 'store']);
    Route::post('promo/ajax', [PromoController::class, 'ajax']);
    Route::post('promo/{id}', [PromoController::class, 'update']);
});
