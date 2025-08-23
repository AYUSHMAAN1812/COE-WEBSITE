async function exportTableToExcel(tableID = 'time-table') {
    const slotColors = {
        A: 'FF0000FF', // Blue
        B: 'FF008000', // Green
        C: 'FFFFFF00', // Yellow
        D: 'FFFF7F50', // Coral
        E: 'FFFFC0CB', // Pink
        F: 'FF2E8B57', // Seagreen
        G: 'FFDAA520', // Goldenrod Yellow
        P: 'FF808080', // Gray
        Q: 'FF008000', // Green
        R: 'FFFFFF00', // Yellow
        S: 'FFFF0000', // Red
        W: 'FFFA8072', // Salmon
        X: 'FF4682B4', // Steelblue
        Y: 'FF008000', // Green
        Z: 'FF0000FF', // Blue
        Challenge_Lectures: 'FFD3D3D3' // Lightgray
    };

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Time Table');

    const tableContainer = document.getElementById(tableID);
    const tables = tableContainer.getElementsByTagName('table');

    let currentRow = 1;

    for (let t = 0; t < tables.length; t++) {
        const table = tables[t];
        worksheet.getCell(`A${currentRow}`).value = `Segment ${2 * t + 1} - ${2 * t + 2}`;
        worksheet.getCell(`A${currentRow}`).font = { bold: true, size: 12 };
        currentRow++;

        const rows = table.querySelectorAll('tr');
        let maxCols = 0;

        rows.forEach((row, rowIndex) => {
            const cells = row.querySelectorAll('td, th');
            maxCols = Math.max(maxCols, cells.length);

            cells.forEach((cell, colIndex) => {
                const excelCell = worksheet.getCell(currentRow, colIndex + 1);
                const cellText = cell.innerText.trim();

                if (rowIndex === 0) {
                    // Header row styling
                    excelCell.value = cellText;
                    excelCell.font = { bold: true };
                    excelCell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FF454545' }
                    };
                    excelCell.font.color = { argb: 'FFFFFFFF' };
                    excelCell.alignment = { horizontal: 'center', vertical: 'middle' };
                    worksheet.getRow(currentRow).height = 40;
                } else {
                    if (cellText !== "") {
                        // Multi-line format for course name and venue
                        const formattedText = cellText.replace(/<br\s*\/?>/gi, '\n');
                        excelCell.value = formattedText;
                        excelCell.alignment = { wrapText: true, vertical: 'middle', horizontal: 'center' };

                        for (let slot in slotColors) {
                            if (cell.classList.contains(slot)) {
                                excelCell.fill = {
                                    type: 'pattern',
                                    pattern: 'solid',
                                    fgColor: { argb: slotColors[slot] }
                                };
                                break;
                            }
                        }
                    } else {
                        excelCell.value = ""; // Keep it empty
                    }
                }


                // Apply border
                excelCell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };

                if (rowIndex === 0) {
                    // Header row styling
                    excelCell.font = { bold: true };
                    excelCell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FF454545' }
                    };
                    excelCell.font.color = { argb: 'FFFFFFFF' };
                    worksheet.getRow(currentRow).height = 40; // Header row height
                } else {
                    // Color only non-empty cells
                    if (cellText !== "") {
                        for (let slot in slotColors) {
                            if (cell.classList.contains(slot)) {
                                excelCell.fill = {
                                    type: 'pattern',
                                    pattern: 'solid',
                                    fgColor: { argb: slotColors[slot] }
                                };
                                break;
                            }
                        }
                    }
                }
            });

            // Set row height for data rows
            if (rowIndex !== 0) {
                worksheet.getRow(currentRow).height = 25;
            }

            currentRow++;
        });

        // Set column widths for this segment
        for (let c = 1; c <= maxCols; c++) {
            worksheet.getColumn(c).width = 20;  // You can adjust width here
        }

        currentRow += 2; // Space between tables
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "TimeTable.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
