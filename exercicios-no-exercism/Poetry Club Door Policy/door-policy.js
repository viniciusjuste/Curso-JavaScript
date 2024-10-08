// Instructions

// A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past, the club has a very specific door policy which you'll need to master, before attempting entry.

// There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day.

// The password is always based on a poem and can be derived in a two-step process.

// The guard will recite the poem, one line at a time and you have to respond with an appropriate letter of that line.
// The guard will now tell you all the letters you responded with at once, and you need to write them down on a piece of paper in a specific format.
// The details of the process depend on which door you are trying to enter.

// TASk 1
// To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.

// To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood.

// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.

// Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.

// TASK 2
// Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.

// Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.

// TASK 3
// To determine letters for the back door password, you need to respond with the last letter of the line of the poem that the guard recites to you.

// The members of the poetry club are really clever. The poem mentioned before is also telestich, which means that the last letter of each sentence also forms a word:

// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// When the guard recites Stands so high, you'll respond h, when the guard recites Huge hooves too, you'll respond o.

// Note that sometimes the guard does stylistic pauses (in the form of whitespace) at the beginning or at the end of a line. You will need to ignore those pauses to derive the correct letter.

// Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.

// TASK 4
// To enter the poetry club via the back door, you need to be extra polite. So to derive the password, this time you need to correctly capitalize the word and add ', please' at the end.

// Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
function frontDoorResponse(line) {
    let firstLetter = '';
    const lines = line.split('\n');
    for (let i = 0; i < lines.length; i++) {
        firstLetter += lines[i][0];
    }
    return firstLetter;
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */

function frontDoorPassword(word) {
    const firstLetter = word[0].toUpperCase();
    const restOfString = word.slice(1).toLowerCase();
    return firstLetter + restOfString;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
function backDoorResponse(line) {
    let lastLetter = '';
    const lines = line.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const trimmedLine = lines[i].trim();
        if (trimmedLine.length > 0) {
            lastLetter += trimmedLine.slice(-1);
        }
    }
    return lastLetter;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
function backDoorPassword(word) {
    word = frontDoorPassword(word) + ', please';
    return word;
}
