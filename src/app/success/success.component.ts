import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-success',
  standalone: false,
  
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent  {

  underwriter: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the underwriter data passed via router state
    this.underwriter = history.state;
    console.log('Underwriter Data:', this.underwriter); // Debugging to ensure it's working
  }

  exportToPDF() {
    const element = document.getElementById('success-page');
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new jsPDF instance

        const imgWidth = 190; // Fit image to A4 width
        const pageHeight = 297; // A4 page height
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height proportionally
        let heightLeft = imgHeight;
        let position = 0;

        // Add the first page
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add extra pages if content overflows
        while (heightLeft > 0) {
          position = heightLeft - imgHeight; // Move to next page
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save the PDF
        pdf.save('RegistrationDetails.pdf');
      });
    }
  }

}
