class Laptop {
    isOn = false;
    constructor(info, quality){
        this.info = info;
        this.quality = quality;    
    }

    set info(value) {
        this._info = { 
            producer: value.producer,
            age: value.age,
            brand: value.brand,
        }
    }

    get info() {
        return this._info;
    }
    
    get price() {
        return (800 - (info.age * 2) + (this.quality * 0.5));
    }
    s
    turnOn() {
        this.isOn = true;
        this.quality--;
    }
    
    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        return JSON.stringify({
            producer: this.info.producer,
            age: this.info.age,
            brand: this.info.brand,
        })
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)