// test/utils/Excelreports.js
import * as XLSX from 'xlsx';  // Ensure you have installed xlsx package

class ExcelReport {
    constructor() {
        this.workbook = XLSX.utils.book_new();
        this.sheetData = [['Test Case', 'Status', 'Time']];
    }

    addTestResult(testCase, status, time) {
        this.sheetData.push([testCase, status, time]);
    }

    saveReport() {
        const worksheet = XLSX.utils.aoa_to_sheet(this.sheetData);
        XLSX.utils.book_append_sheet(this.workbook, worksheet, 'TestResults');
        XLSX.writeFile(this.workbook, './reports/TestReport.xlsx');
    }
}

// ✅ Named export
export default new ExcelReport();
