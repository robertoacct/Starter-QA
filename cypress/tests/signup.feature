Feature: Signup

    Scenario: Access Automation Exercise Signup page
        Given I click on login button
        And I fill the Signup fields
        When I click on Signup button
        Then I should see the title of the page