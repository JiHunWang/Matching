
/*
 * File: matching.js
 * -----------------
 * Presents the implementation of the matching algorithm.
 */

/* Person = {'mentors': {'ez': ['Eric Zhou', {'e'}, (1, 3, 4, 5)],
                         'ig': ['Isabel Gallegos', {'f'}, (1, 4, 5)],
                         'ap': ['Anthony Perez', {'e', 'f'}, (2, 3)],
                         'fk': ['Farzaan Kaiyom', {'f'}, (1, 2, 5)],
                         'jw': ['Ji Hun Wang', {'e'}, (5)]}} */

/* Language is of a set of strings */
/* Interest is a set of booleans */
/* Number of students assigned to each mentor is an int */

var mentor = {
    'ez': ['Eric Zhou', new Set(['e']),          [true, false, true, true, true],    3],
    'ig': ['Isabel Gallegos', new Set(['f']),    [true, false, false, true, true],   2],
    'ap': ['Anthony Perez', new Set(['e', 'f']), [false, true, true, false, false],  4],
    'fk': ['Farzaan Kaiyom', new Set(['f']),     [true, true, false, false, true],   5],
    'jw': ['Ji Hun Wang', new Set(['e']),        [false, false, false, false, true], 4]
};

/* Helpful function (not used for the actual implementation of the matching algorithm) */
function union(set1, set2) {
    var setUnion = new Set([...set1, ...set2]);
    return setUnion;
}

/* Code for matching algorithm */
function match(mentor, mentee) {
    var mentee_name = Object.keys(mentee);
    var same_language = new Map();
    var keysInitial = Object.keys(mentor);
    keysInitial.forEach(function(key) {
        var intersection = new Set(
            [...mentee[mentee_name[0]][1]].filter(x => mentor[key][1].has(x))
        );
        if (intersection.size != 0) {
            same_language[key] = mentor[key];
        }
    });
    
    var intermediate = new Map();
    var keysFinal = Object.keys(same_language);
    keysFinal.sort(function(item1, item2) {
        var interest1 = same_language[item1][2];
        var interest2 = same_language[item2][2];
        var intersection1 = 0;
        var intersection2 = 0;

        for (var i = 0; i < 5; i++) {
            if (interest1[i] == true && mentee[mentee_name][2][i]) {
                intersection1++;
            }
            if (interest2[i] == true && mentee[mentee_name][2][i]) {
                intersection2++;
            }
        }
        intermediate[item1] = intersection1;
        intermediate[item2] = intersection2;

        return intersection2 - intersection1;
    });

    var keysSize = keysFinal.length;
    var topPriority = intermediate[keysFinal[0]];
    var mentorList = [];
    
    for (var i = 0; i < keysSize; i++) {
        if (intermediate[keysFinal[i]] == topPriority) {
            mentorList.push(keysFinal[i]);
        } else {
            break;
        }
    }

    mentorList.sort(function(item1, item2) {
        return mentor[item1][3] - mentor[item2][3];
    });
    return mentor[mentorList[0]];
}

/* For Reference:
    var mentor = {
        'ez': ['Eric Zhou', new Set(['e']),          [true, false, true, true, true],    3],
        'ig': ['Isabel Gallegos', new Set(['f']),    [true, false, false, true, true],   2],
        'ap': ['Anthony Perez', new Set(['e', 'f']), [false, true, true, false, false],  4],
        'fk': ['Farzaan Kaiyom', new Set(['f']),     [true, true, false, false, true],   5],
        'jw': ['Ji Hun Wang', new Set(['e']),        [false, false, false, false, true], 4]
    };
*/


var mentee1 = {
    'ls': ['Leland Stanford', new Set(['f']),    [false, true, true, false, true]]
};
console.log(mentee1);
console.log(match(mentor, mentee1));    // Expected: Anthony Perez
console.log(' ');

var mentee2 = {
    'ah': ['Alexander Hamilton', new Set(['e', 'f']), [true, false, false, false, false]]
};
console.log(mentee2);
console.log(match(mentor, mentee2));    // Expected: Isabel Gallegos
console.log(' ');

var mentee3 = {
    'gw': ['George Washington', new Set(['e']), [false, false, false, false, false]]
};
console.log(mentee3);
console.log(match(mentor, mentee3));    // Expected: Eric Zhou
console.log(' ');

var mentee4 = {
    'ja': ['John Adams', new Set(['e', 'f']), [true, true, true, true, true]]
};
console.log(mentee4);
console.log(match(mentor, mentee4));    // Expected: Eric Zhou
console.log(' ');

var mentee5 = {
    'ab': ['Aaron Burr', new Set(['e']), [true, false, false, true, true]]
};
console.log(mentee5);
console.log(match(mentor, mentee5));    // Expected: Eric Zhou
console.log(' ');

var mentee6 = {
    'jm': ['James Madison', new Set(['f']), [true, true, true, false, false]]
};
console.log(mentee6);
console.log(match(mentor, mentee6));    // Expected: Anthony Perez
console.log(' ');