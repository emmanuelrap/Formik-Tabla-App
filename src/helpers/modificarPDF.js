export async function modifyPdf() {
console.log("Entro a Modify PDF")
const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib
    // Fetch an existing PDF document
    const url = 'HORARIO_TEC.pdf'
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize()

    // Draw a string of text diagonally across the first page
    firstPage.drawText('          CANCELADO! ', {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

          // Trigger the browser to download the PDF document
    download(pdfBytes, "pdfCancelado.pdf", "application/pdf");
    console.log("Termino a Modify PDF")
  }