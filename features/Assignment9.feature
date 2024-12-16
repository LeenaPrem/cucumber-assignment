Feature: Assignment9 task

    Scenario:  Count books by author

        Given I have the following books in the store "<bookName>" "<bookAuthor>"  
        When I search for books by "<bookAuthor>"
        Then I should see 2 books found

        Examples:
            | bookName | bookAuthor |
            | book1    | Author1    |
            | book2    | Author1    |
            | book3    | Author2    |
            | book4    | Author3    |
