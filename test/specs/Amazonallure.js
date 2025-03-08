import allureReporter from '@wdio/allure-reporter';
import Launchpage from "../pageobjects/Launchpage";
import ResultsPage from "../pageobjects/ResultsPage";
import deleteCartPage from "../pageobjects/deleteCartPage";

describe('Product Adding to the Cart', function () {

    it('Check URL is launched', async () => {
        allureReporter.addFeature('Launch Page');
        allureReporter.addSeverity('critical');
        allureReporter.addStep('Launching Amazon website');

        await Launchpage.LaunchUrl();
        await expect(await Launchpage.$logo()).toBeDisplayed();
    });

    it('Check Electronics is selected from the dropdown', async () => {
        allureReporter.addFeature('Dropdown Selection');
        allureReporter.addSeverity('major');
        allureReporter.addStep('Selecting Electronics from dropdown');

        await Launchpage.selectdropdown();
        const selectedValue = await Launchpage.$selectoption().getValue();
        expect(selectedValue).toContain('search-alias=electronics');
    });

    it('Search the product', async () => {
        allureReporter.addFeature('Search Functionality');
        allureReporter.addSeverity('critical');
        allureReporter.addStep('Entering product name: apple');

        await Launchpage.searchproduct();
        await expect(Launchpage.$search()).toHaveValue('apple');
        await expect(ResultsPage.$results()).toBeDisplayed();
    });

    it('Select the first product with Prime tag', async () => {
        allureReporter.addFeature('Prime Product Selection');
        allureReporter.addSeverity('critical');
        allureReporter.addStep('Verifying Add to Cart button is displayed and clickable');

        await expect(ResultsPage.$addcart()).toBeDisplayed();
        await expect(ResultsPage.$addcart()).toBeClickable();

        allureReporter.addStep('Selecting the first Prime product');
        await ResultsPage.selectFirstPrimeProduct();
    });

    it('Check product is added to cart', async () => {
        allureReporter.addFeature('Cart Functionality');
        allureReporter.addSeverity('blocker');
        allureReporter.addStep('Checking if product is added to cart');

        await ResultsPage.checkproduct();
        await expect(await ResultsPage.$checkcart()).toBeDisplayed();
    });

    it('Check product can be deleted from the cart and navigate back to the home page', async () => {
        allureReporter.addFeature('Cart Management');
        allureReporter.addSeverity('critical');
        allureReporter.addStep('Deleting the product from the cart');

        await deleteCartPage.deleteproduct();
        await expect(Launchpage.$logo()).toBeDisplayed();

        allureReporter.addStep('Navigating back to the home page');
        await Launchpage.$logo().click();
    });

});
