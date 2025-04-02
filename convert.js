function exportTableToExcel(filename = 'timetable.csv') {
    let tables = document.getElementsByTagName("table");
    let csvContent = [];

    // Convert HTMLCollection to an array and iterate through tables
    Array.from(tables).forEach((table, tableIndex) => {
        let rows = table.querySelectorAll('tr');

        // Add a table heading
        csvContent.push(`Table ${tableIndex + 1}`);

        rows.forEach(row => {
            let rowData = [];
            row.querySelectorAll('th, td').forEach(cell => {
                let cellText = cell.innerText.trim().replace(/[\r\n]+/g, ' '); // Replace newlines with spaces

                if (cellText) {
                    rowData.push(`"${cellText}"`); // Enclose in quotes to preserve formatting in CSV
                } else {
                    rowData.push('""'); // Empty cell with double quotes for CSV formatting
                }
            });

            if (rowData.length > 0) {
                csvContent.push(rowData.join(','));  // Join columns with commas
            }
        });

        // Add a blank line between tables for readability
        csvContent.push('');
    });

    // Convert to Blob and trigger download
    let csvBlob = new Blob([csvContent.join('\n')], { type: 'text/csv' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(csvBlob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
