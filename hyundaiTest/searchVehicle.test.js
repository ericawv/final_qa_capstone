/* Note: Test case name: Test Case_Automated: Accessing the Search feature
*Test plan and test case location: https://trello.com/b/ovLKqAcc/hyundai-test-plan-capstone
*/


//Import Builder,Capabilities, By, until, for selectors, for selenium webdriver
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

//Chrome driver for running test using the Chrome browser 
const chromedriver = require('chromedriver')

//Drive for opening an instance of the Chrome browser. Then build the driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Sets the default timeout interval for each test
jest.setTimeout(80000)

//Test Hyundaia USA search with async to use await. Wait until element is located. 
test('Search Feature Test', async () => {

//Opens browser window in maximize mode
    await driver.manage().window().maximize()       

//Driver (using .get) will navigate to a website.
    await driver.get('https://www.hyundaiusa.com/us/en')

//Accepts the cookies policy 
    await driver.findElement(By.xpath('/html/body/div[1]/div/button')).click()

//Locate and click on the Menu button
    await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[2]/div/div/div[2]/div/button[2]/span[1]')).click()

//Locate the Search input field   
    let searchVehicle = await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[3]/div[1]/div[1]/form/label/input'))

//Waits for the page images for load
    await driver.sleep(5000)

//Enter Paisade in the Search input field   
    await searchVehicle.sendKeys('Palisade')

//Waits for the page images for load
    await driver.sleep(5000) 

//Locate Compare the 2022 Hyundai Palisade vs the 2021 Toyota Highlander from the results list
    let results = await driver.findElement(By.xpath('//*[@id="global-site-header"]/div/div[3]/div[1]/div[2]/a[7]'))

//Click on Compare the 2022 Hyundai Palisade vs the 2021 Toyota Highlander result     
    await results.click()

//Locate the Search Results header   
    let searchResults = await driver.findElement(By.xpath('//*[@id="main"]/div[6]/div/div[1]/div/div[2]/h1'))

//Get the Search Results text
    let resultHeader = await searchResults.getText()

//Assertion to validate/check that the Search Results displays on the search results page
    expect(resultHeader).toContain('Search Results')
    
//To tell the driver to quit or end the test
    await driver.quit()
})