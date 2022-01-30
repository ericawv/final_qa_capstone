/* Note: Test case name: Test Case_Automated: Test the functionality to Sign into a existing account
*Test plan and test case location: https://trello.com/b/wnP1VJm2/universal-orlando-test-plan-capstone
*/


//Required to cresate a new driver, for selectors, for selenium webdriver
const {Builder, Capabilities, By, until} = require('selenium-webdriver')

//Chrome driver for running test using the Chrome browser 
const chromedriver = require('chromedriver')

//Driver for opening an instance of the Chrome browser. Then build the driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Sets the default timeout interval for each test
jest.setTimeout(80000)

//Universal Orlando Sign In with async to use await. Wait until element is located. 
test('Universal Sign In Test', async () => {

//Driver.get will navigate to a website.
    await driver.get('https://www.universalorlando.com/web/en/us')

//Opens browser window in maximize mode
    await driver.manage().window().maximize() 

//Locate and click on banner button to remove message from the top of the home page 
    await driver.findElement(By.xpath('/html/body/app-component/header/div/div[1]/div/div/button')).click()

//Locate and click on the Menu toggle on the home page 
    await driver.findElement(By.xpath('/html/body/app-component/header/div/div[2]/div[2]/button[2]/div')).click()

//Wait for the page to load    
    await driver.sleep(5000)
 
//Locate and click on the Sign-In link
    await driver.findElement(By.xpath('/html/body/app-component/header/nav/div/div[1]/div[2]/a')).click()

//Locate the Username input field   
    let email = await driver.findElement(By.xpath('//*[@id="Username"]'))

//Enter the Username in the input field    
    await email.sendKeys('joys19504@gmail.com')

//Locate the Password field
    let password = await driver.findElement(By.xpath('//*[@id="Password"]'))

//Enter the Password in the input field   
    await password.sendKeys('Joysmith2022!')

//Locate and click on the Sign In button
    await driver.findElement(By.xpath('//*[@id="page"]/main/section/div[2]/div[1]/form/input[2]')).click()

//Locate the My Profile header
    let profile = await driver.findElement(By.xpath('//*[@id="page"]/main/app-my-profile/section/div[1]/div/account-content-intro/div/h1'))

//Get the My Profile text     
    let signedIn = await profile.getText()

//Checks the assertion of the My Profile header
    expect(signedIn).toBe('My Profile')  

//Wait for page to load    
    await driver.sleep(5000)
 
//Locate and click on the Menu toggle    
    await driver.findElement(By.xpath('//*[@id="page"]/header/div/div[2]/button[2]')).click()

//Wait for the page to laod   
    await driver.sleep(5000)

//Locate and click on the user's name button
    await driver.findElement(By.xpath('//*[@id="page"]/header/nav/div/div[1]/div[2]/button')).click()

//Wait for page to load   
    await driver.sleep(5000)

//Locate and click on the Sign Off link
    await driver.findElement(By.xpath('//*[@id="page"]/header/nav/div/div[1]/div[2]/div/a[3]')).click()

//Locate the You've been logged out header   
    let close = await driver.findElement(By.xpath('//*[@id="page"]/main/section/div/div/div/h1'))

//Get the You've been logged out header text    
    let signOff = await close.getText()

//Checks the assertion of the You've been logged out header     
    expect(signOff).toBe("You've been logged out")

//Closes the browser window when test is complete    
    await driver.quit()
})

