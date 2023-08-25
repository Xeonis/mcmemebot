const chalk = require('chalk');

class Color {
    constructor (name,hex) {
        this.name = name;
        this.hex = hex;
    }
}

class State {
    /**
     * 
     * @param {String} name 
     * @param {Integer} level 
     * @param {Color} color 
     */
    constructor (name, level, color) {
        this.name = name;
        this.level = level;
        this.color = color;
    }
}

const STATES =  new Map  ([
    ["success",new State ("success",0,new Color("contains mainly GREEN", "#c9df8a"))],
    ["debug" ,new  State ("debug",1,new Color("Orange White", "#F0B27A"))],
    ["info" ,new State ("info",2,new Color("White blue", "#5AC3F8 "))],
    ["warn" ,new State ("warn",3,new Color("purple", "#E0D952"))],
    ["error" ,new State ("error",4,new Color("Red", "#F53F3F"))],
    ["disable" ,new State ("disable",5,new Color("---", "#c9df8a"))],
    ["ok" ,new State ("OK",-1,new Color("contains mainly GREEN", "#52BE80"))],
    ["wait" ,new  State ("WAIT",-2,new Color("turquoise", "#138D75"))],
    ["log" ,new  State ("LOG",-3,new Color("turquoise", "#8A64B6"))]],
);


class Timer {
    static #currenttime = () => {
       let currentdate = new Date()
       return currentdate.getDay() + "/" + currentdate.getMonth() 
            + "/" + currentdate.getFullYear() + "  " 
            + currentdate.getHours() + ":" 
            + currentdate.getMinutes() + ":" + currentdate.getSeconds()   
    }

    #defaultForm = "curent"

    #forms = new Map (
      [
        ["time",() => {return new Date().toLocaleTimeString()}],
        ["uts",() => {return new Date().toUTCString()}],
        ["locale",() => {return new Date().toLocaleString()}],
        ["curent",Timer.#currenttime]
      ]
    )
    
    constructor (form) {
        this.setNew (form) 
    }

    setNew (form) {
        this.form = (this.#forms.has(form))?  
                                            this.#forms.get(this.form) : 
                                            this.#forms.get(this.#defaultForm)
    }

    getTime () {
        return this.form()
    }
    
}



class Logger {
    #nameColor = new Color("name Color","#FFFFFF")
    #timeColor = new Color("grey pink","#B5808E")
    #LoggerStates = STATES


    constructor (name = '', time = false,state) {
        this.name = (name && name != '')? name: undefined;
        this.time = (time)? true : false

        this.ShortLifeLoggerPool = new Map()

        this.LoggerState = this.#LoggerStates.get("success");

        this.timer = new Timer()
        if (this.#LoggerStates.has(state)) this.LoggerState = this.#LoggerStates.get(state)
        this.spaces = 25
        this.textName = ''
        this.likeAJSON = false;
    }


    getName () {
        this.textName = (this.name)? (chalk.hex(this.#nameColor.hex))(`[${this.name}]|`): ''
        return this.textName;     
    }

    #getTextPrefix (prefix) {
        if (!this.#LoggerStates.has(prefix)) return ""
        const currentPrefix = this.#LoggerStates.get(prefix)
        let textPrefix = `[${currentPrefix.name.toUpperCase()}]`
        return chalk.bold(this.#setPrefixDraw(prefix)(textPrefix))
    }


    #setPrefixDraw (prefix) {
        if (!this.#LoggerStates.has(prefix)) return (content) => {return content}
        const currentPrefix = this.#LoggerStates.get(prefix)
        let textFieldDrawer = chalk.hex(currentPrefix.color.hex)
        return textFieldDrawer
    }

    #setTime () {
        if (!this.time) this.textTime = ''
        let time = this.timer.getTime()
        this. textTime = (this.name)? (chalk.hex(this.#timeColor.hex))(`[${time}]|`): ''
    }

    #contentBuilder (type,content = []) {
        let TextContent = (content.length > 1)? content : content.join("");
        if (this.likeAJSON && content.length > 1) {
            TextContent = JSON.stringify([content], null, this.spaces)
        }
        return this.#setPrefixDraw(type)(TextContent)
    }

    #buildAnswer(type,content = []) {
        return `${this.textTime}${this.getName()}${this.#getTextPrefix(type)} `+this.#contentBuilder(type,content);
    }

    #doWhenLog () {
        this.#setTime()
    }

    info (...content) {
        const type = "info"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    
    log (...content) {
        const type = "log"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    
    success (...content) {
        const type = "success"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    debug(...content) {
        const type = "debug"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    info(...content) {
        const type = "info"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    warn(...content) {
        const type = "warn"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    error(...content) {
        const type = "error"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    ok(...content) {
        const type = "ok"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    wait(...content) {
        const type = "wait"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }
    log(...content) {
        const type = "log"
        this.#doWhenLog(type,content)
        if (!this.#LoggerStates.has(type)) {
            if (this.LoggerState.level > this.#LoggerStates.get(type).level) return 
            return content
        }
        console.log(this.#buildAnswer(type,content))
    }


    
}

class ShortLifeLogger extends Logger {
    constructor (name, time,state) {
        super (name, time,state)
    }
}


let so = new Logger("nmae",true)
so.likeAJSON = true
so.info("text sample1","text sample2",STATES)
so.info("text sample1")
so.log("text sample1")
so.debug("text sample1")
so.info("text sample1")
so.warn("text sample1")
so.error("text sample1")
so.ok("text sample1")
so.wait("text sample1")

module.exports = {
    Logger
}






