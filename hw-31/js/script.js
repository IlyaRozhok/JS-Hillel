function myBind(that, ...args) {
    const self = this;
    return function (...otherArgs) {
        return self.apply(that, [...args, ...otherArgs])
    };
}

Function.prototype.myBind = myBind;
function test() {
    console.log(this)
}

const binded = test.bind({a: 7});
binded();