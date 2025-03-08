class LaunchAmazon{
    constructor(){
        this.$logo=()=>$(`//a[@id="nav-logo-sprites" and @aria-label="Amazon.in"]`);
        this.$selectoption = () => $(`//*[@id="searchDropdownBox"]`);
        this.$search = () => $(`//input[@type="text"]`);
        this.$searchsubmit = () => $(`//input[@type="submit"]`);


    }
    async LaunchUrl() {
        await browser.url('https://www.amazon.in/');
        await browser.maximizeWindow();
        await browser.pause(2000);
    }
    async selectdropdown() {
        await this.$selectoption().click();
        await this.$selectoption().selectByVisibleText('Electronics');
        await this.$selectoption().waitForDisplayed({ timeout: 5000 });
        await this.$selectoption().waitForEnabled({ timeout: 5000 });
    }
    async searchproduct() {
        await this.$search().setValue('apple');
        await this.$searchsubmit().click();
        await browser.pause(2000);
    }
}
export default new LaunchAmazon();