const calc = {
    read(arg1, arg2) {
        this.arg1 = +prompt("Enter first operand");
        this.arg2 = +prompt("Enter second operand");
    },
    sum() {
      if (isNaN(this.arg1) || isNaN(this.arg2)) {
        return alert("Invalid value");
      } 
      return this.arg1 + this.arg2;
    },
    mul() {
      if (isNaN(this.arg1) || isNaN(this.arg2)) {
        return alert("Invalid value");
      }
      return this.arg1 * this.arg2;
    }
};