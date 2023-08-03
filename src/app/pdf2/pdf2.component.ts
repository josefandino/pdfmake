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
              [
                {

                  style: 'tableInternals',
                  table: {
                    widths: ['*', '*', '*'],
                    body: [
                      [
                        {
                          border: [false, false, false, false],
                          text: 'Col1',
                        },
                        {
                          border: [false, false, false, false],
                          text: 'Col1',
                        },
                        {
                          border: [false, false, false, false],
                          text: 'Col1',
                        },
                      ],
                    ]
                  },
                }
              ],
              ['column 1'],
              ['column 1'],
              ['column 1'],
              ['column 1'],
            ]
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
