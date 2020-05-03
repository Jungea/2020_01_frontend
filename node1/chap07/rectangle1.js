class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    area() { //이건 멤버변수가 아닌 메소드이다.
        return this.width * this.height;
    }
}

let rectangle = new Rectangle(10, 15);
console.log(rectangle); //따라서 area가 보이지 않는다.
console.log(rectangle.area());
console.log(rectangle.area);