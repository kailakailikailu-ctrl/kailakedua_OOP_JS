class Kaila{
    skillCoding(){
        console.log("skill kaila: UI/UX");
    }
    levelCoding(){
        console.log("level Kaila: sedang");
    }
}
class KembaranKaila{
    skillCoding(){
        console.log("skill kembaran: kaila di PHP");
    }
    levelCoding(){
        console.log("level kembaran Kaila: ga setara pak cecep pokoknya");
    }
}
const manusia = [new Kaila(), new KembaranKaila()];
manusia.forEach(manusia => manusia.skillCoding());
manusia.forEach(manusia => manusia.levelCoding());