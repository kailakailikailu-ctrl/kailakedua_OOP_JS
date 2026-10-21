class Kucing{
    bersuara(){
        console.log("Meong...");
    }
}
class Anjing{
    bersuara(){
        console.log("Guk guk...");
    }
}
class hamster{
    bersuara(){
        console.log("Sik sik...");
    }
}
const hewan = [new Kucing(), new Anjing()];
hewan.forEach(hewan => hewan.bersuara());

const hewan3 = new hamster();
hewan3.bersuara();

//Buat File baru PolimorfismePPLG
//Buat 2 method skillCoding, levelCoding