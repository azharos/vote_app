<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

use Buglinjo\LaravelWebp\Facades\Webp;

function initTipe($dir = "")
{
    if ($dir == "layanan") {
        return "LY";
    } else if ($dir == "icon") {
        return "ICON";
    } else if ($dir == "produk") {
        return "PD";
    } else if ($dir == "user") {
        return "US";
    } else if ($dir == "konfigurasi") {
        return "KFG";
    }
}

function storeImage($dir = "")
{
    $url    = asset('image/no_image.jpg');
    $path   = public_path('image/uploads/' . $dir);

    if ($dir != NULL && file_exists($path)) {
        $url    = asset('image/uploads/' . $dir);
    }

    return $url;
}

function uploadFile($type, $foto)
{
    $ekstension = $foto->getClientOriginalExtension();

    if ($ekstension == "webp" || $ekstension == "png") {
        $nama = initTipe($type) . time() . rand(1, 100) . '.' . $foto->getClientOriginalExtension();
        $foto->move('image/uploads/', $nama);
    } else {
        $nama = initTipe($type) . time() . rand(1, 100) . '.webp';
        $path = public_path('image/uploads/' . $nama);

        Webp::make($foto)->save($path, 90);
    }

    return $nama;
}

function deleteFile($url = "")
{
    $dir = Str::remove(asset('image') . '/', $url);
    File::delete(public_path('image/' .  $dir));
}
