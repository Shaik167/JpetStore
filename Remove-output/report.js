$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Features/Scenarios2.feature");
formatter.feature({
  "name": "TestCase",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Remove and update cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Update Cart",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Update_Cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Return to Main Menu",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Birds",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_Birds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Return to Main Menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.click_on_Return_to_Main_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert for Presence of Sign In and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.assert_for_Presence_of_Sign_In_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Update Cart",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Update_Cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Jpet store Demo",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on jpetstore demo in home page",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.click_on_jpetstore_demo_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Shopping Cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch browser with JpetStorePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Launch_browser_with_JpetStorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on fish",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_click_on_fish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select product and fillany check in shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.select_product_and_fillany_check_in_shopping_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body//area[2]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT041\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:49869}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a9bfd91f9c018398e325e32f2dd00c3c\n*** Element info: {Using\u003dxpath, value\u003d//body//area[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.Pages.HomePage.clickOnFish(HomePage.java:39)\r\n\tat com.cts.StepDefinitions.StepDefinition.select_product_and_fillany_check_in_shopping_cart(StepDefinition.java:300)\r\n\tat ✽.select product and fillany check in shopping cart(file:///C:/Users/BLTuser.BLT041/Downloads/Batch8/JpetStoreBDDd/src/main/resources/Features/Scenarios2.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.StepDefinitions.StepDefinition.user_Close_browser()"
});
formatter.result({
  "status": "skipped"
});
});