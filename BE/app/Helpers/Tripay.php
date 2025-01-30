<?php

use Illuminate\Support\Facades\Http;

function initial_tripay()
{
    return [
        'URL_API'               => 'https://tripay.co.id/api-sandbox',
        'TRIPAY_API_KEY'        => env('TRIPAY_API_KEY', ''),
        'TRIPAY_PRIVATE_KEY'    => env('TRIPAY_PRIVATE_KEY', ''),
        'KODE_MERCHANT'         => env('KODE_MERCHANT', ''),
    ];
}

function list_payment_channel_tripay()
{
    $url = initial_tripay()['URL_API'];

    $response = Http::withHeaders([
        'Authorization' => "Bearer " . initial_tripay()['TRIPAY_API_KEY']
    ])->get($url . '/merchant/payment-channel');

    $new_response   = $response->getBody();
    $new_response   = json_decode($new_response);

    if ($response->successful()) {
        return [
            'status'    => true,
            'response'  => $new_response
        ];
    } elseif ($response->failed()) {
        return [
            'status'    => false,
            'response'  => $new_response
        ];
    }
}

function request_trx_tripay()
{
    $url            = initial_tripay()['URL_API'];
    $privateKey     = initial_tripay()['TRIPAY_PRIVATE_KEY'];
    $merchantCode   = initial_tripay()['KODE_MERCHANT'];

    $merchantRef  = 'INV55567';
    $amount       = 1500000;

    $data = [
        'method'            => '',
        'merchant_ref'      => '',
        'amount'            => '',
        'customer_name'     => '',
        'customer_email'    => '',
        'order_items'       => [
            [
                "name"      => "",
                "price"     => "",
                "quantity"  => ""
            ]
        ],
        "signature"         => hash_hmac('sha256', $merchantCode . $merchantRef . $amount, $privateKey),
    ];

    $response = Http::withHeaders([
        'Authorization' => "Bearer " . initial_tripay()['TRIPAY_API_KEY']
    ])->post($url . '/transaction/create', $data);

    $new_response   = $response->getBody();
    $new_response   = json_decode($new_response);

    if ($response->successful()) {
        return [
            'status'    => true,
            'response'  => $new_response
        ];
    } elseif ($response->failed()) {
        return [
            'status'    => false,
            'response'  => $new_response
        ];
    }
}

function fee_kalkulator_tripay($amount)
{
    $url = initial_tripay()['URL_API'];

    $response = Http::withHeaders([
        'Authorization' => "Bearer " . initial_tripay()['TRIPAY_API_KEY']
    ])->get($url . '/merchant/fee-calculator', [[
        'amount'    => $amount
    ]]);

    $new_response   = $response->getBody();
    $new_response   = json_decode($new_response);

    if ($response->successful()) {
        return [
            'status'    => true,
            'response'  => $new_response
        ];
    } elseif ($response->failed()) {
        return [
            'status'    => false,
            'response'  => $new_response
        ];
    }
}

function detail_trx_tripay($reference)
{
    $url = initial_tripay()['URL_API'];

    $response = Http::withHeaders([
        'Authorization' => "Bearer " . initial_tripay()['TRIPAY_API_KEY']
    ])->get($url . '/transaction/detail', [
        'reference' => $reference
    ]);

    $new_response   = $response->getBody();
    $new_response   = json_decode($new_response);

    if ($response->successful()) {
        return [
            'status'    => true,
            'response'  => $new_response
        ];
    } elseif ($response->failed()) {
        return [
            'status'    => false,
            'response'  => $new_response
        ];
    }
}
