// function pipe(...fns)
// {
//     return function(x){
//         return fns.reduce((input,fn)=>fn(input),x);
//     }
// }

function pipe(...fns)
{
    return function(x){
        return fns.reduce((input,fn)=> fn(input),x);
    }
}

function compose(...fns)
{
    return function(x){
        return fns.reduceRight((input,fn)=>fn(input),x);
    }
}

function curry(fn){
    return fn.length == 1 ? fn : function(x){
        return curry(fn.bind(null,x));
    }
}

function demethodize(fn){
    return function(obj,...rest){
        return fn.call(obj,...rest);
    }
}

function reverse(fn){
    return function(...rest){
        // let rev = rest.reverse();
        // return fn(...rev);

        rest.reverse();
        return fn(...rest);
    }
}