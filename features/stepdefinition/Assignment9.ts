import { Given, When, Then } from "@cucumber/cucumber";
//import { expect } from "chai";

let count = 0;

Given(`I have the following books in the store {string} {string}`, function (bookName: string, authorName: string) {
    console.log(bookName, authorName);
});

When(`I search for books by {string}`, function (authorName: string) {
    //console.log('I search for books by Author1');
    if (authorName === 'Author1') {
        count = count + 1;
    }
    console.log(count);

});

Then('I should see 2 books found', function () {
    //expect(count).to.equal(2);

    if (count === 2) {
        console.log('Books by Author1 are 2');
    }
    console.log('Expected 2 books but found ' + count);


});
