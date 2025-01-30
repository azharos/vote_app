<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Border;

class ExcelController extends Controller
{
    function createExcel($spreadsheet, $fileName)
    {
        $streamedResponse = new StreamedResponse();
        $streamedResponse->setCallback(function () use ($spreadsheet) {

            $writer = new Xlsx($spreadsheet);
            $writer->save('php://output');
        });
        $streamedResponse->setStatusCode(Response::HTTP_OK);
        $streamedResponse->headers->set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $streamedResponse->headers->set('Content-Disposition', 'attachment; filename="' . $fileName . '"');
        return $streamedResponse->send();
    }

    public function produk_excel($data)
    {
        $spreadsheet = new Spreadsheet();
        $sheet       = $spreadsheet->getActiveSheet();

        $sheet->setCellValue('A1', 'No.');
        $sheet->setCellValue('B1', 'SKU Code');
        $sheet->setCellValue('C1', 'Nama Produk');
        $sheet->setCellValue('D1', 'Harga Produk');
        $sheet->setCellValue('E1', 'Margin Harga Tamu');
        $sheet->setCellValue('F1', 'Margin Harga Member');

        $sheet->getStyle('A1:F1')->getFont()->setBold(true);

        $row = 2;

        foreach ($data as $key => $dt) {
            $sheet->setCellValue('A' . $row, $key + 1);
            $sheet->setCellValue('B' . $row, $dt->skuCode);
            $sheet->setCellValue('C' . $row, $dt->nama);
            $sheet->setCellValue('D' . $row, $dt->hargaProduk);
            $sheet->setCellValue('E' . $row, "");
            $sheet->setCellValue('F' . $row, "");
            $row++;
        }

        $sheet->getStyle('A1:' . 'F' . ($row - 1))->applyFromArray(
            array(
                'borders' => array(
                    'allBorders' => array(
                        'borderStyle' => Border::BORDER_THIN,
                        'color'       => array('argb' => 'FF000000'),
                    ),
                ),
            )
        );

        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);;

        return $this->createExcel($spreadsheet, 'export_produk.xlsx');
    }
}
