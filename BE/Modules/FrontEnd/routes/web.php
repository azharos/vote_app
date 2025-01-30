<?php

use Illuminate\Support\Facades\Route;
use Modules\FrontEnd\Http\Controllers\FrontEndController;

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

Route::get('/', [FrontEndController::class, 'index']);
Route::get('games', [FrontEndController::class, 'games']);
Route::get('reviews', [FrontEndController::class, 'reviews']);
Route::get('invoices', [FrontEndController::class, 'invoices']);
Route::get('pembayaran', [FrontEndController::class, 'pembayaran']);
Route::get('leaderboard', [FrontEndController::class, 'leaderboard']);
