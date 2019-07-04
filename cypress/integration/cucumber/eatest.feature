Feature:  Test EATest website

   Test this sample website

   Scenario: Test the login feature
        Given I visit the EA site
        And I click on the login link
      #   And I enter username "user" and password "password"
        And I login using the data table: 
        | username | password |
        | admin   | password |

        