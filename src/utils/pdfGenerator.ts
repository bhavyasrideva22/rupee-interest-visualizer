
import { toast } from 'sonner';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface Result {
  principal: number;
  rate: number;
  time: number;
  interest: number;
  totalAmount: number;
  yearlyBreakdown: Array<{
    year: number;
    interest: number;
    balance: number;
  }>;
}

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export const generatePDF = async (result: Result) => {
  try {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString('en-IN');
    
    // Header with logo and title
    doc.setFillColor(36, 94, 79); // #245e4f (dark green)
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('RupeeCalc', 20, 15);
    doc.setFontSize(12);
    doc.text('Simple Interest Calculator Results', 20, 22);
    
    // Date
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated on: ${currentDate}`, 20, 35);
    
    // Input parameters
    doc.setFontSize(14);
    doc.setTextColor(36, 94, 79);
    doc.setFont('helvetica', 'bold');
    doc.text('Calculation Parameters', 20, 45);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(12);
    doc.text(`Principal Amount: ₹${result.principal.toLocaleString('en-IN')}`, 20, 55);
    doc.text(`Interest Rate: ${result.rate}% per annum`, 20, 62);
    doc.text(`Time Period: ${result.time} years`, 20, 69);
    
    // Results
    doc.setFontSize(14);
    doc.setTextColor(36, 94, 79);
    doc.setFont('helvetica', 'bold');
    doc.text('Results', 20, 82);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(12);
    doc.text(`Interest Earned: ₹${result.interest.toLocaleString('en-IN')}`, 20, 92);
    
    doc.setFont('helvetica', 'bold');
    doc.text(`Total Amount: ₹${result.totalAmount.toLocaleString('en-IN')}`, 20, 99);
    
    // Table with yearly breakdown
    doc.autoTable({
      startY: 110,
      head: [['Year', 'Interest Earned (₹)', 'Balance (₹)']],
      body: result.yearlyBreakdown.map(row => [
        row.year,
        row.interest.toLocaleString('en-IN'),
        row.balance.toLocaleString('en-IN')
      ]),
      headStyles: {
        fillColor: [36, 94, 79],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240]
      },
      theme: 'grid'
    });
    
    // Formula
    const finalY = (doc as any).lastAutoTable.finalY + 15;
    doc.setFontSize(12);
    doc.setTextColor(36, 94, 79);
    doc.setFont('helvetica', 'bold');
    doc.text('Simple Interest Formula', 20, finalY);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(11);
    doc.text('I = P × r × t', 20, finalY + 7);
    doc.text('where:', 20, finalY + 14);
    doc.text('I = Interest, P = Principal, r = Rate (in decimal), t = Time (in years)', 20, finalY + 21);
    
    // Footer
    doc.setFillColor(36, 94, 79);
    doc.rect(0, 280, 210, 17, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('© RupeeCalc - Trusted Financial Calculator', 20, 290);
    doc.text('www.rupeecalc.com', 140, 290);
    
    // Save the PDF
    doc.save('Simple-Interest-Calculation.pdf');
    
    return true;
  } catch (error) {
    console.error('PDF generation error:', error);
    toast.error('Error generating PDF');
    throw error;
  }
};
