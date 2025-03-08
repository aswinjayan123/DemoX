import Launchpage from "../pageobjects/Launchpage";
import ResultsPage from "../pageobjects/ResultsPage";
import deleteCartPage from "../pageobjects/deleteCartPage";
import ExcelReport from "../utils/Excelreports"; 
// Import Excel Report

describe('Product Adding to the cart', function () {

    it('Check URL is launched', async () => {
        await Launchpage.LaunchUrl();
        await expect(await Launchpage.$logo()).toBeDisplayed();
        ExcelReport.addTestResult('Check URL is launched', 'Passed');
    });

    it('Check Electronics is selected from the dropdown', async () => {
        await Launchpage.selectdropdown();
        const selectedValue = await Launchpage.$selectoption().getValue();
        expect(selectedValue).toContain('search-alias=electronics');
        ExcelReport.addTestResult('Check Electronics selection', 'Passed');
    });

    it('Search the product', async () => {
        await Launchpage.searchproduct();
        await expect(Launchpage.$search()).toHaveValue('apple');
        await expect(ResultsPage.$results()).toBeDisplayed();
        ExcelReport.addTestResult('Search the product', 'Passed');
    });

    it('Select the first product with prime tag', async () => {
        await expect(ResultsPage.$addcart()).toBeDisplayed();
        await expect(ResultsPage.$addcart()).toBeClickable();
        await ResultsPage.selectFirstPrimeProduct();
        ExcelReport.addTestResult('Select first prime product', 'Passed');
    });

    it('Check Product is added to cart', async () => {
        await ResultsPage.checkproduct();
        await expect(await ResultsPage.$checkcart()).toBeDisplayed();
        ExcelReport.addTestResult('Check Product is added to cart', 'Passed');
    });

    it('Check product can be deleted from the cart and navigate back to the home page', async () => {
        await deleteCartPage.deleteproduct();
        await expect(Launchpage.$logo()).toBeDisplayed();
        await Launchpage.$logo().click();
        ExcelReport.addTestResult('Delete product and navigate home', 'Passed');
    });

});
