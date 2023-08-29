Feature: Signup

    Scenario: Access Automation Exercise Signup page
        Given I access Automation Exercise page
        When I fill the Signup fields
        And I click on Signup button
        Then I should see the title of the page