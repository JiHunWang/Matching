// import User from '../user'   % user.js
/*
 * File: matching.js
 * -----------------
 * Presents the implementation of the matching algorithm.
 */

var users = {
    "5cf5dccd08d902001ef6449e":
    { "_id" : "5cf5dccd08d902001ef6449e",
      "email" : "farkaiyom@gmail.com",
      "password" : "$2a$10$uW6d6fL5bkubaqwmG2V5w.UCYryBSYHBG8gP61J0qHzJNZsRf5qJS",
      "isMentee" : false,
      "age" : 21,
      "gender" : "male",
      "course" : "course1",
      "countryOfOrigin" : "other",
      "asylumStatus" : "asylumSeeker",
      "skills" : { "computer": false,
                   "coding" : true,
                   "education" : false,
                   "leadership" : false,
                   "development" : false },
      "languages" : { "english" : true, "french": false },
      "phone" : { "number" : "210-624-1731", "verified" : false },
      "emailVerified" : false,
      "name" : { "first" : "Farzaan", "last" : "Kaiyom" },
      "__v" : 0 },
    "4de5ddcd07d902011fe6943e":
    { "_id" : "4de5ddcd07d902011fe6943e",
      "email" : "ericzhou@gmail.com",
      "password" : "$2a$10$uW6d6fL5bkubaqwmG2V5w.UCYryBSYHBG8gP61J0qHzJNZsRf5qJS",
      "isMentee" : false,
      "age" : 21,
      "gender" : "male",
      "course" : "course1",
      "countryOfOrigin" : "other",
      "asylumStatus" : "asylumSeeker",
      "skills" : { "computer": true,
                   "coding" : true,
                   "education" : false,
                   "leadership" : true,
                   "development" : false },
      "languages" : { "english": false, "french" : true },
      "phone" : { "number" : "210-624-1731", "verified" : false },
      "emailVerified" : false,
      "name" : { "first" : "Eric", "last" : "Zhou" },
      "__v" : 0 },
    "3ce8fqpe69e838502ef6000e":
    { "_id" : "3ce8fqpe69e838502ef6000e",
      "email" : "aperez@gmail.com",
      "password" : "$2a$10$uW6d6fL5bkubaqwmG2V5w.UCYryBSYHBG8gP61J0qHzJNZsRf5qJS",
      "isMentee" : false,
      "age" : 21,
      "gender" : "male",
      "course" : "course1",
      "countryOfOrigin" : "other",
      "asylumStatus" : "asylumSeeker",
      "skills" : { "computer": true,
                   "coding" : true,
                   "education" : true,
                   "leadership" : false,
                   "development" : false },
      "languages" : { "english" : true, "french": true },
      "phone" : { "number" : "210-624-1731", "verified" : false },
      "emailVerified" : false,
      "name" : { "first" : "Anthony", "last" : "Perez" },
      "__v" : 0 },
    "2qq8bksj09d702106dp6069g":
    { "_id" : "2qq8bksj09d702106dp6069g",
      "email" : "igallegos@gmail.com",
      "password" : "$2a$10$uW6d6fL5bkubaqwmG2V5w.UCYryBSYHBG8gP61J0qHzJNZsRf5qJS",
      "isMentee" : false,
      "age" : 21,
      "gender" : "female",
      "course" : "course1",
      "countryOfOrigin" : "other",
      "asylumStatus" : "asylumSeeker",
      "skills" : { "computer": false,
                   "coding" : false,
                   "education" : false,
                   "leadership" : true,
                   "development" : true },
      "languages" : { "english" : false, "french" : true },
      "phone" : { "number" : "210-624-1731", "verified" : false },
      "emailVerified" : false,
      "name" : { "first" : "Isabel", "last" : "Gallegos" },
      "__v" : 0 },
    "1pq5eovo9d800001lm1227e":
    { "_id" : "1pq5eovo9d800001lm1227e",
      "email" : "jhwang@gmail.com",
      "password" : "$2a$10$uW6d6fL5bkubaqwmG2V5w.UCYryBSYHBG8gP61J0qHzJNZsRf5qJS",
      "isMentee" : false,
      "age" : 21,
      "gender" : "male",
      "course" : "course1",
      "countryOfOrigin" : "other",
      "asylumStatus" : "asylumSeeker",
      "skills" : { "computer": false,
                   "coding" : false,
                   "education" : true,
                   "leadership" : false,
                   "development" : false },
      "languages" : { "english" : true, "french" : true },
      "phone" : { "number" : "210-624-1731", "verified" : false },
      "emailVerified" : false,
      "name" : { "first" : "Ji Hun", "last" : "Wang" },
      "__v" : 0 },
    "7sq7biew9e08492lm2975e":
    { "_id" : "7sq7biew9e08492lm2975e",
        "email" : "drew@gmail.com",
        "password" : "$2a$10$uW6d6fL5bkubaqwmG2V5w.UCYryBSYHBG8gP61J0qHzJNZsRf5qJS",
        "isMentee" : true,
        "age" : 21,
        "gender" : "male",
        "course" : "course1",
        "countryOfOrigin" : "other",
        "asylumStatus" : "asylumSeeker",
        "skills" : { "computer": true,
                     "coding" : true,
                     "education" : false,
                     "leadership" : false,
                     "development" : false },
        "languages" : { "english" : false, "french" : true },
        "phone" : { "number" : "210-624-1731", "verified" : false },
        "emailVerified" : false,
        "name" : { "first" : "Drew", "last" : "Gregory" },
        "__v" : 0 }
};

/* Helpful function (not used for the actual implementation of the matching algorithm) */
function union(set1, set2) {
    var setUnion = new Set([...set1, ...set2]);
    return setUnion;
}


function ref(users) {
    var usersData = [ users ];
    return usersData[0];
}


function languageMatch(mentorLanguages, menteeLanguages) {
    var intersection = 0;
    if (menteeLanguages.english == true) {
        if (mentorLanguages.english == true) {
            intersection++;
        }
    }
    if (menteeLanguages.french == true) {
        if (mentorLanguages.french == true) {
            intersection++;
        }
    }
    if (intersection > 0) {
        return true;
    } else {
        return false;
    }
}


/* Code for matching algorithm */
function match(users, menteeId) {

    var usersData = ref(users);
    var keys = Object.keys(users);
    var mentee = new Map();
    var mentor = new Map();
    
    for (var i = 0; i < keys.length; i++){
        var obj = usersData[keys[i]]
        if (!obj.isMentee) {
            var id = obj._id;
            mentor[id] = new Map();
            mentor[id] = obj;
        } else {
            if (obj._id == menteeId) {
                mentee[obj._id] = obj;
            }
        }
    }

    var same_language = new Map();
    var keysInitial = Object.keys(mentor);
    keysInitial.forEach(function(key) {

        menteeLanguages = mentee[menteeId].languages;
        mentorLanguages = mentor[key].languages;

        if (languageMatch(mentorLanguages, menteeLanguages)) {
            same_language[key] = mentor[key];
        }

    });
    
    var intermediate = new Map();
    var keysFinal = Object.keys(same_language);
    keysFinal.sort(function(item1, item2) {
        var skill1 = same_language[item1].skills;
        var skill2 = same_language[item2].skills;
        var intersection1 = 0;
        var intersection2 = 0;

        if (skill1.computer && mentee[menteeId].skills.computer) {
            intersection1++;
        }
        if (skill1.coding && mentee[menteeId].skills.coding) {
            intersection1++;
        }
        if (skill1.education && mentee[menteeId].skills.education) {
            intersection1++;
        }
        if (skill1.leadership && mentee[menteeId].skills.leadership) {
            intersection1++;
        }
        if (skill1.development && mentee[menteeId].skills.development) {
            intersection1++;
        }

        if (skill2.computer && mentee[menteeId].skills.computer) {
            intersection2++;
        }
        if (skill2.coding && mentee[menteeId].skills.coding) {
            intersection2++;
        }
        if (skill2.education && mentee[menteeId].skills.education) {
            intersection2++;
        }
        if (skill2.leadership && mentee[menteeId].skills.leadership) {
            intersection2++;
        }
        if (skill2.development && mentee[menteeId].skills.development) {
            intersection2++;
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

/* Example run */
console.log(match(users, '7sq7biew9e08492lm2975e'));
