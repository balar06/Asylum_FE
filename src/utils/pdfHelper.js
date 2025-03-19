import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const generatePdf = async (data) => {
  try {
    const res = await fetch("/i-5899.pdf");
    if (!res.ok) throw new Error("PDF file not found");

    const existingPdfBytes = await res.arrayBuffer();

    const pdfDoc = await PDFDocument.load(existingPdfBytes, { ignoreEncryption: true });
    const firstPage = pdfDoc.getPages()[0];
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const drawField = (text, x, y) => {
      firstPage.drawText(text, { x, y, size: 12, font, color: rgb(0, 0, 0) });
    };

    // Personal + Address
    drawField(data.lastName, 100, 700);
    drawField(data.firstName, 100, 680);
    drawField(data.dob, 100, 660);
    drawField(data.gender, 100, 640);
    drawField(data.maritalStatus, 100, 620);
    drawField(data.street, 100, 600);
    drawField(data.city, 100, 580);
    drawField(data.state, 100, 560);
    drawField(data.zip, 100, 540);
    drawField(data.phone, 100, 520);

    // Spouse
    drawField(data.spouseLastName || "", 100, 500);
    drawField(data.spouseFirstName || "", 100, 480);
    drawField(data.spouseDOB || "", 100, 460);
    drawField(data.spouseNationality || "", 100, 440);

    // Children
    data.children.forEach((child, i) => {
      drawField(child.name || "", 100, 420 - i * 40);
      drawField(child.dob || "", 100, 400 - i * 40);
      drawField(child.nationality || "", 100, 380 - i * 40);
    });

    return await pdfDoc.save();
  } catch (error) {
    alert("Error generating PDF: " + error.message);
    throw error;
  }
};
