class Delete{
    constructor(){
        this.$deletecart = () => $(`//span[@class="sc-quantity-stepper"]//*[@data-a-selector="decrement-icon"]`);
    }
    async deleteproduct() {
        await this.$deletecart().click();
        await browser.pause(1000);
    }
}
export default new Delete();