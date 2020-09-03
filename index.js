function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity='go to the office') => {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string='*') {
    return function(something='special') {
        return `You are ${string}${something}${string}!`
    }
}
wrapAdjective('%')('a dedicated programmer')

let Calculator = {
    add: function(a, b) { return a + b},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a/b}
}

const actionApplyer = (integer, array) => {

    // let result = integer
    // for( let i = 0; i < array.length; i++){
    //     result = array[i](result)
    // }
    // return result

    array.map(element => {
        let result = integer
        result = element(result)
    })
    return result
}