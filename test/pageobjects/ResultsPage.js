
class Amazon {
    constructor() {
        this.$results=()=>$('//h2[text()="Results"]');
        this.$$AllProducts=()=>$$(`//div[@data-component-type="s-search-result"]`);
        this.$Primeicon=()=>$(`.a-icon.a-icon-prime.a-icon-medium`);
        this.$addcart = () => $(`//button[contains(text(), "Add to cart")]`);
        this.$checkcart = () => $(`//div[@id="nav-cart-count-container"]//span[@id="nav-cart-count"]`);
        
    }

    async selectFirstPrimeProduct() {
        const products = await this.$$AllProducts();
        for (let product of products) {
            const primeIcon = await this.$Primeicon();
            if (await primeIcon.isExisting()) {
                const addToCartButton = await this.$addcart();
                if (await addToCartButton.isExisting()) {
                    await product.scrollIntoView();
                    await browser.pause(3000);
                    await this.$addcart().click();
                    await browser.pause(4000);
                    break;
                }
            }
        }
    }
       

    async checkproduct() {
        await this.$checkcart().click();
        await browser.pause(1500);
    }

    
}

export default new Amazon();
