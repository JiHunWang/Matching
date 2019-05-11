    
/* Person = {'mentors': {'ez': ['Eric Zhou', {'e'}, (1, 3, 4, 5)],
                         'ig': ['Isabel Gallegos', {'f'}, (1, 4, 5)],
                         'ap': ['Anthony Perez', {'e', 'f'}, (2, 3)],
                         'fk': ['Farzaan Kaiyom', {'f'}, (1, 2, 5)],
                         'jw': ['Ji Hun Wang', {'e'}, (5)]}} */

var mentor = {
    'ez': ['Eric Zhou', new Set(['e']), new Set([1, 3, 4, 5])],
    'ig': ['Isabel Gallegos', new Set(['f']), new Set([1, 4, 5])],
    'ap': ['Anthony Perez', new Set(['e', 'f']), new Set([2, 3])],
    'fk': ['Farzaan Kaiyom', new Set(['f']), new Set([1, 2, 5])],
    'jw': ['Ji Hun Wang', new Set(['e']), new Set([5])]
};

function union(set1, set2) {
    var setUnion = new Set([...set1, ...set2]);
    return setUnion;
}

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
    
    var keysFinal = Object.keys(same_language);
    keysFinal.sort(function(item1, item2) {
        var item1Set = same_language[item1][2];
        var item2Set = same_language[item2][2];
        var intersection1 = new Set(
            [...item1Set].filter(x => mentee[mentee_name[0]][2].has(x))
        );
        var intersection2 = new Set(
            [...item2Set].filter(x => mentee[mentee_name[0]][2].has(x))
        );
        var menteeChoice = mentee[mentee_name[0]][2];
        var union1 = union(menteeChoice, item1Set);
        var union2 = union(menteeChoice, item2Set);
        return (((intersection2.size) * 100.0) / union2.size) - (((intersection1.size) * 100.0) / union1.size);
    });

    var matchResult = keysFinal[0];
    return mentor[matchResult];
}

var mentee1 = {
    'ls': ['Leland Stanford', new Set(['f']), new Set([2, 3, 5])]
};
console.log(match(mentor, mentee1));

var mentee2 = {
    'ah': ['Alexander Hamilton', new Set(['e', 'f']), new Set([1])]
};
console.log(match(mentor, mentee2));

var mentee3 = {
    'gw': ['George Washington', new Set(['e']), new Set([])]
};
console.log(match(mentor, mentee3));

var mentee4 = {
    'gw': ['George Washington', new Set(['e', 'f']), new Set([5])]
};
console.log(match(mentor, mentee4));