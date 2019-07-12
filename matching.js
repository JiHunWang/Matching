import mongoose from 'mongoose';
import User from '../src/models/user.js'

/*
 * File: matching.js
 * -----------------
 * Presents the implementation of the matching algorithm.
 */


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
/*function match(users, menteeId) {
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

        var menteeLanguages = mentee[menteeId].languages;
        var mentorLanguages = mentor[key].languages;

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
}*/



// Updated matching function
export function match2(userId) {

    // First, match2() finds data about the current user.
    User.findOne(
        { _id: userId },
        function(err, user) {
            err ? console.log(err) : findUsers(user, 'users', {}, doMatching)
        }
    );
  
    // Then, match2() finds the entire collection of users and starts matching with the callback.
    function findUsers(currUser, name, query, callback) {

        mongoose.connection.db.collection(name, function(err, collection) {
            collection.find(query).toArray(function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    callback(currUser, data);
                }
            });
        });
    }

    // Callback function; the matching process should be done here and log an ObjectId of the chosen user.
    let doMatching = (currUser, usersData) => {

        var mentor = [];
        for (var i = 0; i < usersData.length; i++) {
            if (!usersData[i].isMentee) {
                if (typeof usersData[i].usersMatched != 'undefined' && usersData[i].usersMatched.length < 6) {
                    mentor.push(usersData[i]);
                }
            }
        }

        var language_match = [];
        for (var i = 0; i < mentor.length; i++) {
            if (languageMatch(mentor[i].languages, currUser.languages)) {
                language_match.push(mentor[i]);
            }
        }

        var intermediate = new Map();
        language_match.sort(function(mentor1, mentor2) {

                var skill1 = mentor1.skills;
                var skill2 = mentor2.skills;
                var intersection1 = 0;
                var intersection2 = 0;

                if (skill1.computerLiteracy && currUser.skills.computerLiteracy) {
                    intersection1++;
                }
                if (skill1.coding && currUser.skills.coding) {
                    intersection1++;
                }
                if (skill1.education && currUser.skills.education) {
                    intersection1++;
                }
                if (skill1.leadership && currUser.skills.leadership) {
                    intersection1++;
                }
                if (skill1.personalDevelopment && currUser.skills.personalDevelopment) {
                    intersection1++;
                }
                intermediate[mentor1._id] = intersection1;
        
                if (skill2.computerLiteracy && currUser.skills.computerLiteracy) {
                    intersection2++;
                }
                if (skill2.coding && currUser.skills.coding) {
                    intersection2++;
                }
                if (skill2.education && currUser.skills.education) {
                    intersection2++;
                }
                if (skill2.leadership && currUser.skills.leadership) {
                    intersection2++;
                }
                if (skill2.personalDevelopment && currUser.skills.personalDevelopment) {
                    intersection2++;
                }
                intermediate[mentor2._id] = intersection2;
                return intersection2 - intersection1;
            
        });
        
        let topPriority = intermediate[language_match[0]._id];
        var finalChoice = [];

        for (var i = 0; i < language_match.length; i++) {
            if (intermediate[language_match[i]._id] == topPriority) {
                finalChoice.push(language_match[i]);
            }
        }
        console.log(finalChoice[Math.floor(Math.random() * finalChoice.length)]._id);

    }
}

