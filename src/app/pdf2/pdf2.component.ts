import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf2',
  templateUrl: './pdf2.component.html',
  styleUrls: ['./pdf2.component.scss']
})
export class Pdf2Component {

  createPDF() {
    const pdfDefinition: any = {
      content: [
        {
          style: 'tableExample',
          widths: ['*', '*', '*'],
          table: {
            widths: ['*'],
            body: [
              // todo: SECTION 1 CABECERA DEL DOCUMENTO
              [
                {
                  style: 'tableInternals',
                  table: {
                    widths: ['*', '*', '*'],
                    body: [
                      [
                        {
                          border: [false, false, true, false],
                          rowSpan: 2, text: 'Logo', alignment: 'center'
                        },
                        {
                          border: [false, false, true, true],
                          text: 'Proyecto CAREM 25', style: 'subheader'
                        },
                        {
                          border: [false, false, false, true],
                          text: 'SOC-CAREM25CO-55\nC0000\ncRev.: 0c', alignment: 'center'
                        },
                      ],
                      [
                        {},
                        {
                          border: [false, false, true, false],
                          text: 'Dpto. Coordinación Preservación y Gestión de la  Información y Operación', alignment: 'center'
                        },
                        {
                          border: [false, false, false, false],
                          text: 'Página:1 de 115', alignment: 'center', margin: [0, 10, 1, 1]
                        },
                      ],
                    ]
                  },
                }
              ],

              // todo: SECTION 2 servicio de consultoria
              [
                {
                  style: 'tableInternals',
                  table: {
                    widths: ['auto', '*',],
                    body: [
                      [
                        {
                          border: [false, false, false, false],
                          text: 'TÍTULO:', bold: true
                        },
                        {
                          border: [false, false, false, false],
                          text: 'Servicio de consultoría para desarrollo de software'
                        },
                      ],

                    ]
                  },
                }
              ],
              // todo: SECTION 3
             
              [
                {
                  style: 'tableInternals',
                  table: {
                    widths: ['*',],
                    body: [
                      [                        {
                          border: [false, false, false, false],
                          text: 'Descripción del Producto / Servicio y su Uso Previsto:' 
                        },                        
                      ],
                      [                        {
                          border: [false, false, false, false],
                          text: 'Contratación del servicio de consultoría para desarrollo de software.', 
                        },                        
                      ],

                    ]
                  },
                }
              ],
              // todo: SECTION 4

              ['column 1'],
              ['column 1'],
              ['column 1'],
            ],
          }
        },

      ],
      styles: {
        tableInternals: {
          border: [false, true, false, false],
        },
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
