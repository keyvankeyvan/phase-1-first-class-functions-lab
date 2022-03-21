// Code your solution in this file!

// PART 1
const returnFirstTwoDrivers = function(arr1) {return (arr1.slice(0,2))};

// PART 2
const returnLastTwoDrivers = function(arr2) {return (arr2.slice(-2))};

// PART 3
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

// PART 4
function createFareMultiplier(int1) {
    const asd = function(fare) {return (int1 * fare)}
    return asd;
}

// PART 5
const fareDoubler = createFareMultiplier(2);

// PART 6
const fareTripler = createFareMultiplier(3);

// PART 7
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return (returnFirstTwoDrivers(drivers));
}