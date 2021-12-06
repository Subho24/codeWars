let your_strongest_arm
let friends_strongest_arm
let your_weak_arm 
let firends_weak_arm
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    //coding and coding..
    let result;
    if (yourLeft > yourRight) {
        your_strongest_arm = yourLeft;
        your_weak_arm = yourRight;
    } else {
        your_strongest_arm = yourRight;
        your_weak_arm = yourLeft;
    }
    if (friendsLeft > friendsRight) {
        friends_strongest_arm = friendsLeft;
        firends_weak_arm = friendsRight;
    } else {
        friends_strongest_arm = friendsRight;
        firends_weak_arm = friendsLeft;
    }
    if ((your_strongest_arm === friends_strongest_arm) && (your_weak_arm === firends_weak_arm)) {
        return result = true;
    } else {
        return result = false;
    }

}

console.log(areEquallyStrong(05,00,05,9));