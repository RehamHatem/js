class Engin {
    static #count=0;
    constructor(source ){
        if (new.target.name === "Engin")
            throw new Error("this class cannot be instantiated");


        this._source = source;
    }

    get source() {
        return this._source;
    }

    set source(value) {
        this._source = value;
    }
    getCount(){
        return Engin.#count;
    }
    static incrementCount(){
        this.#count++;
    }
}
class Car extends Engin{
    constructor(top , left , source){
        super(source);
        this._top=top;
        this._left=left;
        
        Engin.incrementCount();
        this.element = document.createElement('img');
        this.element.src = source;
        this.element.style.position = 'absolute';
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
        document.body.appendChild(this.element);

    }
    set setTop(tvalue){
        this._top = tvalue;
        this.element.style.top = `${tvalue}px`;
    }
    set setLeft(lvalue){
        this._left=lvalue;
        this.element.style.left = `${lvalue}px`;
    }
    moveLeft(){
        this.setLeft=this._left-10;
    }
    moveRight(){
        this.setLeft=this._left+10;
    }
    ChangeStyle(styles) {
        Object.assign(this.element.style, styles);
    }
    moveCar(direction) {
        const boundaryLeft = 0;
        const boundaryRight = window.innerWidth - this.element.offsetWidth;
        const move = () => {
            if (direction === 'left' && this._left > boundaryLeft) {
                this.moveLeft();
            } else if (direction === 'right' && this._left < boundaryRight) {
                this.moveRight();
            }
        };
        move();
    }

}
