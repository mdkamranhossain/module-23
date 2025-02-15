// Find the friend with the smallest name.

const friendsName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(friendsName){
    let smallName = friendsName[0];
    for(const name of friendsName){
        if(name.length < smallName.length){
            smallName = name;
            return smallName;
        }
    }
}
const smallestName = smallName(friendsName);
console.log(smallestName);

