import ansiStyles from "ansi-styles";

//@ts-ignore
export function print4(type ,prefix, title, body){

    if(type === "failed"){
        console.log(`${ansiStyles.bgWhite.open}${ansiStyles.black.open}${ansiStyles.bold.open} ${prefix} ${ansiStyles.bold.close}${ansiStyles.black.close}${ansiStyles.bgWhite.close} ` +
            `${ansiStyles.white.open}${ansiStyles.bgGrey.open}${ansiStyles.bold.open} ${title} ${ansiStyles.bold.close}${ansiStyles.bgGrey.close}${ansiStyles.white.close} ` +
            `${ansiStyles.bold.open}${ansiStyles.red.open}FAILED${ansiStyles.red.close}${ansiStyles.bold.close} `+
            `${ansiStyles.white.open}${body}${ansiStyles.white.close}`)
    }

    if(type === "rejected"){
        console.log(`${ansiStyles.bgWhite.open}${ansiStyles.black.open}${ansiStyles.bold.open} ${prefix} ${ansiStyles.bold.close}${ansiStyles.black.close}${ansiStyles.bgWhite.close} ` +
            `${ansiStyles.white.open}${ansiStyles.bgGrey.open}${ansiStyles.bold.open} ${title} ${ansiStyles.bold.close}${ansiStyles.bgGrey.close}${ansiStyles.white.close} ` +
            `${ansiStyles.bold.open}${ansiStyles.red.open}REJECTED${ansiStyles.red.close}${ansiStyles.bold.close} `+
            `${ansiStyles.white.open}${body}${ansiStyles.white.close}`)
    }

    if(type === "warning"){
        console.log(`${ansiStyles.bgWhite.open}${ansiStyles.black.open}${ansiStyles.bold.open} ${prefix} ${ansiStyles.bold.close}${ansiStyles.black.close}${ansiStyles.bgWhite.close} ` +
            `${ansiStyles.white.open}${ansiStyles.bgGrey.open}${ansiStyles.bold.open} ${title} ${ansiStyles.bold.close}${ansiStyles.bgGrey.close}${ansiStyles.white.close} ` +
            `${ansiStyles.bold.open}${ansiStyles.yellow.open}WARN${ansiStyles.yellow.close}${ansiStyles.bold.close} `+
            `${ansiStyles.white.open}${body}${ansiStyles.white.close}`)
    }

    if(type === "resolved"){
        console.log(`${ansiStyles.bgWhite.open}${ansiStyles.black.open}${ansiStyles.bold.open} ${prefix} ${ansiStyles.bold.close}${ansiStyles.black.close}${ansiStyles.bgWhite.close} ` +
            `${ansiStyles.white.open}${ansiStyles.bgGrey.open}${ansiStyles.bold.open} ${title} ${ansiStyles.bold.close}${ansiStyles.bgGrey.close}${ansiStyles.white.close} ` +
            `${ansiStyles.bold.open}${ansiStyles.green.open}RESOLVED${ansiStyles.green.close}${ansiStyles.bold.close} `+
            `${ansiStyles.white.open}${body}${ansiStyles.white.close}`)
    }

    if(type === "success"){
        console.log(`${ansiStyles.bgWhite.open}${ansiStyles.black.open}${ansiStyles.bold.open} ${prefix} ${ansiStyles.bold.close}${ansiStyles.black.close}${ansiStyles.bgWhite.close} ` +
            `${ansiStyles.white.open}${ansiStyles.bgGrey.open}${ansiStyles.bold.open} ${title} ${ansiStyles.bold.close}${ansiStyles.bgGrey.close}${ansiStyles.white.close} ` +
            `${ansiStyles.bold.open}${ansiStyles.green.open}SUCCESS${ansiStyles.green.close}${ansiStyles.bold.close} `+
            `${ansiStyles.white.open}${body}${ansiStyles.white.close}`)
    }

    if(type === "info"){
        console.log(`${ansiStyles.bgWhite.open}${ansiStyles.black.open}${ansiStyles.bold.open} ${prefix} ${ansiStyles.bold.close}${ansiStyles.black.close}${ansiStyles.bgWhite.close} ` +
            `${ansiStyles.white.open}${ansiStyles.bgGrey.open}${ansiStyles.bold.open} ${title} ${ansiStyles.bold.close}${ansiStyles.bgGrey.close}${ansiStyles.white.close} ` +
            `${ansiStyles.bold.open}${ansiStyles.blue.open}INFO${ansiStyles.blue.close}${ansiStyles.bold.close} `+
            `${ansiStyles.white.open}${body}${ansiStyles.white.close}`)
    }
}

//@ts-ignore
export function print3(location, title, body){
    console.log()
}

//@ts-ignore
export function print(body){

}
