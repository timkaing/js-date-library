// Challenge 1
class D {
    constructor(...args) {

        this.date = new Date(...args)

    }
    
    year() {
        return this.date.getFullYear()
    }

    month() {
       return this.date.getMonth() 
    }

    day() {
        return this.date.getDate()
    }

    hours() {
        return this.date.getHours()
    }

    mins() {
        return this.date.getMinutes()
    }

    secs() {
        return this.date.getSeconds(0)
    }

    format(dateString) {
        const monthNames = [
            "January", 
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        var formatChars = {
            'Y': this.year().toString(),
            'y': this.year().toString().slice(-2),
            'M': monthNames[this.month()],
            'm': monthNames[this.month()].substring(0, 3),
            'D': this.day().toString().length < 2 ? "0" + this.day().toString() : this.day().toString(),
            'd': this.day().toString(),
            'H': this.hours().toString().length < 2 ? "0" + this.hours().toString() : this.hours().toString(),
            'h': this.hours().toString(),
            'I': this.mins().toString().length < 2 ? "0" + this.mins().toString() : this.mins().toString(),
            'i': this.mins().toString(),
            'S': this.secs().toString().length < 2 ? "0" + this.secs().toString() : this.secs().toString(),
            's': this.secs().toString(),
        }

        if(dateString == undefined) {
            return(this.year() + " " + monthNames[this.month()] + " " + (this.day().toString().length < 2 ? "0" + this.day().toString() : this.day().toString()))
        } else {
            let outputStr = ""
            for(let char of dateString) {
                if(formatChars[char]) {
                    outputStr += formatChars[char]
                } else {
                    outputStr += char
                }
            }
            return outputStr
        }
    }

    when () {
        const executeDate = new Date()
        if(executeDate > this.date){
            
            let difference = executeDate.getTime() - this.date.getTime()

            if (difference < 86400000){
                return('less than a day ago')
            } else if (difference < 2628000000){
                let diff = (difference/86400000).toFixed(2)
                return diff == 1 ? (diff + ' day ago') : (diff + ' days ago')
            } else if (difference < 31557600000) {
                let diff = (difference/2628000000).toFixed(2)
                return diff == 1 ? (diff + ' month ago') : (diff + ' months ago')
            } else {
                let diff = (difference/31557600000).toFixed(2)
                return diff == 1 ? (diff + ' year ago') : (diff + ' years ago')
            }
        } else if(executeDate < this.date){
            let difference = this.date.getTime() - executeDate.getTime()

            if (difference < 86400000){
                return('less than a day from now')
            } else if (difference < 2628000000){
                let diff = (difference/86400000).toFixed(2)
                return diff == 1 ? (diff + ' day from now') : (diff + ' days from now')
            } else if (difference < 31557600000) {
                let diff = (difference/2628000000).toFixed(2)
                return diff == 1 ? (diff + ' month from now') : (diff + ' months from now')
            } else {
                let diff = (difference/31557600000).toFixed(2)
                console.log(diff)
                return diff == 1 ? (diff + ' year from now') : (diff + ' years from now')
            }
            
        }

    }
}

// Challenge 2

const d = new D(2021, 0, 0, 0, 0, 0)
d.when()