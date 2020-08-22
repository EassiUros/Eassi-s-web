class father {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sum() {
        console.log("我是爸爸");
    }
}

class son {
    constructor(name,age) {
        this.name = name ;
        this.age = age;
    }

}

var son = new son();
son.sum();