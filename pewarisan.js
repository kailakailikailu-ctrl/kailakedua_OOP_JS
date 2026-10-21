class Hewan {
    bersuara(){
        console.log("Suara Hewan");
    }
}
class Kucing extends Hewan {
    mengeong(){
        console.log("Meow...");
    }
}

const kucing1 = new Kucing();
Kucing.bersuara();
Kucing.mengeong();