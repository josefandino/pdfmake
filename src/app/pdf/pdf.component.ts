import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent {


  createPDF() {
    const pdfDefinition: any = {
      content: [
        {
          style: 'tableExample',
          widths: ['*', '*', '*'],
          table: {
            widths: ['*', '*', '*', '*', '*', '*'],
            body: [

              [
                { colSpan: 2, rowSpan: 2, text: 'Logo', alignment: 'center' },
                {},
                {
                  colSpan: 2, text: 'Proyecto CAREM 25', style: 'subheader', 
                  // Dpto. Coordinación Preservación y Gestión de la  Información y Operación
                  // ', alignment: 'center',
                },
                {
                  colSpan: 2, text: 'IMAGEN', alignment: 'center',
                },
                // [
                //   {
                //     colSpan: 2, text: 'IMAGEN', alignment: 'center',
                //   },
                // ],
                // {},
                { colSpan: 2, text: 'SOC-CAREM25CO-55\nC0000\ncRev.: 0c', alignment: 'center' },
                {},

              ],
              


              [
                'col 1fila2', 'col 2fila2', 
                { colSpan: 2, text: 'SOLICITUD DE COMPRA', style: 'subheader' },
                {},
                { colSpan: 2, text: 'Página:1 de 115', alignment: 'center' },
                {},
                // 'col 5fila2', 'col 6fila2'
              ],
              [
                { colSpan: 6, text: 'TÍTULO: Servicio de consultoría para desarrollo de software', alignment: 'center' },
                {},
                {},
                {},
                {},
                {},
                // { colSpan: 2, rowSpan: 2, text: 'Both: defined at the same time', alignment: 'center' },
                // {},
                // { colSpan: 2, rowSpan: 2, text: 'Both: defined at the same time', alignment: 'center' },
                // {},
              ],



              [
                'col 1fila2', 'col 2fila2', 'col 3fila2', 'col 4fila2', 
            
              {
                colSpan: 2, text: 'SOC-CAREM25CO-55\nC0000\nRev.: 0c', style: 'subheader', 
                // Dpto. Coordinación Preservación y Gestión de la  Información y Operación
                // ', alignment: 'center',
              },
              {},
            ],
            [
              { colSpan: 6, text: 'TÍTULO: Servicio de consultoría para desarrollo de software', alignment: 'center' },
              {},
              {},
              {},
              {},
              {},
            ],
              // [{ text: 'Header 1', style: 'tableHeader', alignment: 'center' }, { text: 'Header 2', style: 'tableHeader', alignment: 'center' }, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
              // ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              // [{ rowSpan: 3, text: 'rowSpan set to 3\nLorem  elit, sed do eiusmod tempor' }, 'Sample value 2', 'Sample value 3'],
              // ['', 'Sample value 2', 'Sample value 3'],
              // ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              // ['Sample value 1', { colSpan: 2, rowSpan: 2, text: 'Both: defined at the same time' }, ''],
              // ['Sample value 1', '', ''],
            ]
          }
        },
        // {
        //   style: 'tableExample',
        //   table: {
        //     heights: function (row: number) {
        //       return (row + 1) * 25;
        //     },
        //     body: [
        //       ['row 1', 'column B'],
        //       ['row 2', 'column B'],
        //       ['row 3', 'column B']
        //     ]
        //   }
        // },
      ],
      styles: {
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5],
          alignment: 'center'
        },
      }
    };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }





}
