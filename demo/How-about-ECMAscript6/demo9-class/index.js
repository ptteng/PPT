class Animal {
    constructor(name){
        this.name = name;
        this.infos = [];
    }

    get info(){
      return this.infos;
    }
    set info( i ){
      this.infos.push(i);
    }
    // type = 'water'这里的意思是当type未传值的时候默认是'water'
    drink(type = 'water'){
        // 使用了箭头函数
        setInterval( () => {
            // 模板字符串
            console.log(`${this.name} want to drink ${type}`)
        }, 1000)
    }

    // static 不需要 new 实例化类就可以用
    static eat(food){
      console.log(food);
    }
}

class Pig extends Animal {
  constructor(name){
    super(name);
  }
}


let pig = new Pig('猪八戒');

pig.drink();

let bull = new Animal();

console.log(bull.info = '牛');

Animal.eat('草');