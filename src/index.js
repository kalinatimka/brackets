module.exports = function check(str, bracketsConfig) {
    // your solution
    var stack = [];
    for (var i = 0; i< str.length; i++) { 
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) { 
                if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                    if (stack.indexOf(bracketsConfig[j][0]) != -1) {
                        while (stack.length) { 
                            if (stack.pop() == bracketsConfig[j][0]) { 
                                break;
                            }
                        }
                        break;
                    }
                }
                stack.push(str[i]);
                break;
            }
            else if (str[i] == bracketsConfig[j][1]) {
                if (!stack.length) { 
                    return false; 
                }
                else {
                    if (stack.indexOf(bracketsConfig[j][0]) != -1) { 
                        while (stack.length) {
                            if (stack.pop() == bracketsConfig[j][0]) { 
                                break;
                            }
                        }
                    }
                    else { 
                        return false;
                    }
                }
            }      
        }
    }
    if (!stack.length) {
        return true;
    }
    return false;
}

// clean code

// var stack = [];
// for (var i = 0; i< str.length; i++) {
//     for (var j = 0; j < bracketsConfig.length; j++) {
//         if (str[i] == bracketsConfig[j][0]) {
//             if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
//                 if (stack.indexOf(bracketsConfig[j][0]) != -1) {
//                     while (stack.length) {
//                         if (stack.pop() == bracketsConfig[j][0]) {
//                             break;
//                         }
//                     }
//                     break;
//                 }
//             }
//             stack.push(str[i]);
//             break;
//         }
//         else if (str[i] == bracketsConfig[j][1]) {
//             if (!stack.length) {
//                 return false;
//             }
//             else {
//                 if (stack.indexOf(bracketsConfig[j][0]) != -1) {
//                     while (stack.length) {
//                         if (stack.pop() == bracketsConfig[j][0]) {
//                             break;
//                         }
//                     }
//                 }
//                 else {
//                     return false;
//                 }
//             }
//         }      
//     }
// }
// if (!stack.length) {
//     return true;
// }
// return false;
