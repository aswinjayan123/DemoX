
import Launchpage from "../pageobjects/Launchpage";
import ResultsPage from "../pageobjects/ResultsPage";
import deleteCartPage from "../pageobjects/deleteCartPage";
describe('Product Adding to the cart', function () {
    it('Check Url is launched', async () => {
        await Launchpage.LaunchUrl();
        await expect(await Launchpage.$logo()).toBeDisplayed();
    })
    

    it('Check Electronics is selected from the dropdown', async () => {
        await Launchpage.selectdropdown();
        const selectedValue = await Launchpage.$selectoption().getValue();
        expect(selectedValue).toContain('search-alias=electronics');
    });
    it('Search the product', async () => {
            await Launchpage.searchproduct();
            await expect(Launchpage.$search()).toHaveValue('apple');
            await expect(ResultsPage.$results()).toBeDisplayed();
    });
    it('Select the first product with prime tag', async () => {
            await expect(ResultsPage.$addcart()).toBeDisplayed();
            await expect(ResultsPage.$addcart()).toBeClickable();
            await ResultsPage.selectFirstPrimeProduct();
           
     });
})