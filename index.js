// Code your solution in this file!
// Assume Scuber's headquarters is located at block 42
const headquarters = 42;

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - headquarters);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

// Function to calculate distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264;
}

// Function to calculate fare price based on distance travelled in feet
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
  } else {
    return 'cannot travel that far'; // Distance over 2500 feet
  }
}


