function createCounter(init){
    let newValue=init;

    function increment(){
        return ++newValue;
    }
    function decrement(){
        return --newValue;
    }
    function reset(){
        newValue= init;
        return newValue;
    }
    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    };
}
