const multy = {
    num:[1,2,3,4],
    multiplyBy: 3,
    multibier: function(){
        return this.num.map(num=>num*this.multiplyBy)
    }

}
console.log(multy.multibier())