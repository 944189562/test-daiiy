function compose(middleWares){
    return () => {
        return dispatch(0, middleWares)
    }
}

function dispatch(i, middleWares){
    let fn = middleWares[i]

    if(!fn){
        return Promise.resolve()
    }
    return Promise.resolve(fn(() => dispatch(i + 1, middleWares)))
}

async function fn1(next){
    console.log('fn1 start')
    await next()
    console.log('fn1 end')
}

async function fn2(next){
    console.log('fn2 start')
    await delay()
    await next()
    console.log('fn2 end')
}

function fn3(next){
    console.log('fn3')
}

function delay(){
    return new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
}

const middleWares = [fn1, fn2, fn3]

const finalFn = compose(middleWares)

finalFn()