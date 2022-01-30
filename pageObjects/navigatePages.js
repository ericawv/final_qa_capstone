// Import Builder,Capabilities, By, until
const {By, until, WebDriver, Capabilities, Builder} = require("selenium-webdriver");

// const BasePage = require('./basePage')

module.exports = class Navigate {
    driver;
    url;
   

    constructor(myDriver, myUrl, myTickets, myPasses, myDeals, myHotels, myAnnualPasses, myVacationPackages, mySafetyGuidelines) {
        this.driver = myDriver
        this.url = myUrl
        this.tickets = myTickets
        this.passes = myPasses
        this.deals = myDeals
        
        this.hotels = myHotels
        this.annualPasses = myAnnualPasses
        this.vacationPackages = myVacationPackages
        this.safetyGuidelines = mySafetyGuidelines
    }

    /* Selectors */

    universalLogo = By.xpath('/html/body/app-component/header/div/div[2]/div[1]/a/img')

    parkTickets = By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[1]/tcm-anchor/a/span/div')
    
    expressPasses = By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[2]/tcm-anchor/a/span/div')
    
    dealsSpecials = By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[3]/tcm-anchor/a/span/div')

   
    // hotels = By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[4]/tcm-anchor/a/span/div')
    
    // annualPasses = By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[5]/tcm-anchor/a/span/div')

    // vacationPackages = By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[6]/tcm-anchor/a/span/div')

    // safetyGuidelines = By.xpath('//*[@id="page-main-content"]/upr-quick-links[1]/section/div[2]/div[7]/tcm-anchor/a/span/div')

    /* Methods */

    async navigationBar() {
        await this.driver.get(this.url)

        await this.driver.wait(until.elementLocated(this.universalLogo))
    }

    async getTickets(myTickets) {
        return(await this.driver.findElement(this.parkTickets)).getText();
    }

    async clickTicket(myTickets) {
        return (await this.driver.findElement(this.parkTickets)).click()
    }

    async getPasses(myPasses) {
        return(await this.driver.findElement(this.expressPasses)).getText();
    }

    async clickPasses(myPasses) {
        return (await this.driver.findElement(this.expressPasses)).click()
    }

    async getDeals(myDeals) {
        return(await this.driver.findElement(this.dealsSpecials)).getText();
    }

    async clickDeals(myDeals) {
        return (await this.driver.findElement(this.dealsSpecials)).click()
    }

    // async getHotels(myHotels) {
    //     return(await this.driver.findElement(this.hotels)).getText();
    // }

    // async clickHotels(myHotels) {
    //     return (await this.driver.findElement(this.hotels)).click()
    // }

    // async getAnnual(myAnnualPasses) {
    //     return(await this.driver.findElement(this.annualPasses)).getText();
    // }

    // async clickAnnual(myAnnualPasses) {
    //     return (await this.driver.findElement(this.annualPasses)).click()
    // }

    // async getPackages(myVacationPackages) {
    //     return(await this.driver.findElement(this.vacationPackages)).getText();
    // }

    // async clickPackages(myVacationPackages) {
    //     return (await this.driver.findElement(this.vacationPackages)).click()
    // }

    // async getSafety(mySafetyGuidelines) {
    //     return(await this.driver.findElement(this.safetyGuidelines)).getText();
    // }

    // async clickSafety(mySafetyGuidelines) {
    //     return (await this.driver.findElement(this.safetyGuidelines)).click()
    // }
   
}



