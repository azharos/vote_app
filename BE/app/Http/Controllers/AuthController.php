<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Modules\Superadmin\Models\KonfigurasiUmum;

class AuthController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('guest', except: ['logout']),
        ];
    }

    public function login()
    {
        return inertia('Login');
    }

    public function verifyOtp()
    {
        $KonfigurasiUmum    = KonfigurasiUmum::firstWhere('nama_domain', env('DOMAIN'));

        $data = [
            'Konfigurasi'  => $KonfigurasiUmum
        ];

        return inertia('VerifyOtp', $data);
    }

    public function register()
    {
        return inertia('Register');
    }

    public function auth(Request $request)
    {
        $request->validate([
            'username'  => 'required',
            'password'  => 'required'
        ], [
            'username.required'     => 'Silahkan lengkapi data!',
            'password.required'     => 'Silahkan lengkapi data!',
        ]);

        $user = User::firstWhere('username', $request->username);

        if ($user) {
            if (Auth::attempt(['email' => $user->email, 'password' => $user->salt . $request->password])) {
                $request->session()->regenerate();

                if ($user->role_id == 1) {
                    return redirect('superadmin/dashboard');
                } else {
                    return redirect('dashboard');
                }
            }

            return redirect('login')->with('danger', 'Username atau Password Salah.');
        }

        return redirect('login')->with('danger', 'Username atau Password Salah.');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
