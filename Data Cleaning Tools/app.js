let originalData = [];
let cleanedData = [];

function processFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Get the first sheet
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet to CSV
        const csv = XLSX.utils.sheet_to_csv(sheet);

        // Parse CSV into rows
        originalData = csv.split('\n').map(row => row.split(','));

        // Display original data
        document.getElementById('originalData').innerText = originalData.map(row => row.join(',')).join('\n');

        // Show feature selection section
        document.getElementById('featureSection').classList.remove('hidden');
    };

    reader.readAsArrayBuffer(file);
}

function applyFeatures() {
    cleanedData = [...originalData]; // Reset cleaned data to original

    const checkboxes = document.querySelectorAll('.feature-options input[type="checkbox"]:checked');
    const selectedFeatures = Array.from(checkboxes).map(cb => cb.value);

    if (selectedFeatures.includes('executeAll')) {
        // Apply all features
        cleanedData = cleanData(cleanedData, true);
    } else {
        // Apply only selected features
        cleanedData = cleanData(cleanedData, false, selectedFeatures);
    }

    // Display cleaned data
    document.getElementById('cleanedData').innerText = cleanedData.map(row => row.join(',')).join('\n');

    // Show output section
    document.getElementById('outputSection').classList.remove('hidden');
}

function cleanData(data, executeAll = false, selectedFeatures = []) {
    // Apply text transformations to all cells
    data = data.map(row => row.map(cell => {
        // Ensure cell is treated as a string
        if (typeof cell !== 'string') {
            cell = String(cell); // Convert non-string values to string
        }

        if (executeAll || selectedFeatures.includes('removeWhitespace')) {
            cell = cell.replace(/\s+/g, ' ').trim();
        }
        if (executeAll || selectedFeatures.includes('removeLeadingSpace')) {
            cell = cell.replace(/^\s+/, '');
        }
        if (executeAll || selectedFeatures.includes('removeTrailingSpace')) {
            cell = cell.replace(/\s+$/, '');
        }
        if (executeAll || selectedFeatures.includes('removeNonPrintableChars')) {
            cell = cell.replace(/[^\x20-\x7E]/g, '');
        }
        if (executeAll || selectedFeatures.includes('capitalizeFirstLetter')) {
            cell = cell.charAt(0).toUpperCase() + cell.slice(1);
        }
        if (executeAll || selectedFeatures.includes('convertToUpperCase')) {
            cell = cell.toUpperCase();
        }
        if (executeAll || selectedFeatures.includes('convertToLowerCase')) {
            cell = cell.toLowerCase();
        }
        if (executeAll || selectedFeatures.includes('trimAllCells')) {
            cell = cell.trim();
        }
        if (executeAll || selectedFeatures.includes('replaceNullWithEmpty')) {
            cell = cell === 'NULL' ? '' : cell;
        }
        return cell;
    }));

    if (executeAll || selectedFeatures.includes('deleteBlankRows')) {
        data = data.filter(row => row.some(cell => cell.trim() !== ''));
    }

    if (executeAll || selectedFeatures.includes('removeDuplicates')) {
        data = data.filter((row, index, self) =>
            index === self.findIndex(r => r.every((cell, i) => cell === r[i]))
        );
    }

    if (executeAll || selectedFeatures.includes('mergeDuplicateRows')) {
        const seen = {};
        data = data.filter(row => {
            const key = row.join('|');
            if (seen[key]) {
                return false;
            }
            seen[key] = true;
            return true;
        });
    }

    if (executeAll || selectedFeatures.includes('sortAscending')) {
        data.sort((a, b) => a[0].localeCompare(b[0]));
    }

    if (executeAll || selectedFeatures.includes('sortDescending')) {
        data.sort((a, b) => b[0].localeCompare(a[0]));
    }

    if (executeAll || selectedFeatures.includes('addSerialNumber')) {
        data = data.map((row, index) => [index + 1, ...row]);
    }

    return data;
}

function downloadCleanedData() {
    const cleanedDataText = document.getElementById('cleanedData').innerText;
    const format = document.getElementById('downloadFormat').value;

    if (format === 'csv') {
        downloadAsCSV(cleanedDataText);
    } else if (format === 'xlsx') {
        downloadAsExcel(cleanedDataText);
    }
}

function downloadAsCSV(data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'cleaned_data.csv';
    a.click();

    URL.revokeObjectURL(url);
}

function downloadAsExcel(data) {
    const rows = data.split('\n').map(row => row.split(','));
    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    // Autofit column widths for all columns
    const autofitColumns = document.querySelector('input[value="autofitColumnWidth"]').checked;
    if (autofitColumns) {
        const columnWidths = calculateColumnWidths(rows);
        worksheet['!cols'] = columnWidths.map(width => ({ wch: width }));
    }

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Cleaned Data');

    XLSX.writeFile(workbook, 'cleaned_data.xlsx');
}

function calculateColumnWidths(data) {
    const columnWidths = [];
    data.forEach(row => {
        row.forEach((cell, colIndex) => {
            const cellLength = cell ? cell.length : 0;
            if (!columnWidths[colIndex] || cellLength > columnWidths[colIndex]) {
                columnWidths[colIndex] = cellLength;
            }
        });
    });
    return columnWidths;
}