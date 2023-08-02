import { Component } from '@angular/core';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-jspdf',
  templateUrl: './jspdf.component.html',
  styleUrls: ['./jspdf.component.scss']
})
export class JspdfComponent {

  createPDF() {
    const doc: any = new jsPDF.default();
  
    const data = [
      [
        { content: 'col 1', colSpan: 6 },
      ],
      ['campo 1', ],
      ['', 'campo 5', 'campo 6', 'campo 7', 'campo 8', 'campo 9'],
      ['', 'campo 8', 'campo 9', 'campo 10', 'campo 11', 'campo 12'],
    ];
  
    doc.autoTable({
      head: [data[0]],
      body: data.slice(1),
      startY: 20,
      margin: { horizontal: 10 },
      tableWidth: 'auto',
      theme: 'grid',
      styles: {
        fillColor: undefined,
        lineWidth: 0.1, // Ajusta el ancho de las líneas de la tabla
        lineColor: [128, 128, 128], // Cambia el color de las líneas de la tabla
      },
      headStyles: {
        fillColor: [255,255,255], // Azul
      },
    });
  
    // doc.save('example.pdf');
    const pdfOutput = doc.output('dataurlnewwindow');
    window.open(pdfOutput, '_blank');
   
  }
  

}

// ['col 1', '', ''],
// 