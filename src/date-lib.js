/**
 * a javascript date library
 * 
 * this library will fulfill:
 * 1. instantiating a date object given a date string
 * 2. convert the date object into readable values
 * 3. format a date given a mask string
 * 4. discover when a date occurs/occured
 * 
 */

 /** wrapper class for the date (D) object */ 
class D {
    /**
     * @desc instantiates a date object 
     * 
     * @param  {...any} args - a valid date string/format
     */
    constructor(...args) {
        this.date = new Date(...args)
    }
    
    /**
     * @class
     * @classdesc - returns the year of a date object
     */
    year() {
        return this.date.getFullYear()
    }

    /**
     * @class
     * @classdesc - returns the month of a date object
     */
    month() {
       return this.date.getMonth() 
    }

    /**
     * @class
     * @classdesc - returns the date of a date object
     */
    day() {
        return this.date.getDate()
    }

    /**
     * @class
     * @classdesc - returns the hour of a date object
     */
    hours() {
        return this.date.getHours()
    }

    /**
     * @class
     * @classdesc - returns the minute of a date object
     */
    mins() {
        return this.date.getMinutes()
    }

    /**
     * @class
     * @classdesc - returns the second of a date object
     */
    secs() {
        return this.date.getSeconds(0)
    }

    /**
     * @param {*} dateString - a "mask" string
     * @returns {string} - a formatted date
     * @description format a date given a "mask" string
     */
    format(dateString) {
        // an array of months
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

        // object of formatted characters
        var formatChars = {
            'Y': this.year().toString(),
            'y': this.year().toString().slice(-2),
            'M': monthNames[this.month()-1],
            'm': monthNames[this.month()-1].substring(0, 3),
            'D': this.day().toString().length < 2 ? "0" + this.day().toString() : this.day().toString(),
            'd': this.day().toString(),
            'H': this.hours().toString().length < 2 ? "0" + this.hours().toString() : this.hours().toString(),
            'h': this.hours().toString(),
            'I': this.mins().toString().length < 2 ? "0" + this.mins().toString() : this.mins().toString(),
            'i': this.mins().toString(),
            'S': this.secs().toString().length < 2 ? "0" + this.secs().toString() : this.secs().toString(),
            's': this.secs().toString(),
        }

        // empty arguments
        if(dateString == undefined) {
            return(this.year() + " " + monthNames[this.month()-1] + " " + (this.day().toString().length < 2 ? "0" + this.day().toString() : this.day().toString()))
        } else {
            let outputStr = "" // generate new ouput

            // replace each formatting character w/ respected value
            for(let char of dateString) {
                // if character in dateString matches formatting character
                if(formatChars[char]) {
                    outputStr += formatChars[char]
                } else {
                    outputStr += char
                }
            }
            return outputStr
        }
    }

    /**
     * @returns {string} - when a date will occur/occured
     * @classdesc calculates when a date will occur/occured
     */
    when(executeDate = new D()) {

        // console.log('**********************')
        // console.log(executeDate)
        // console.log('**********************')
        // create a date when called to compare given date to
        // const executeDate = new Date()
        // if current date is after the given date
        executeDate = executeDate.date
        
        if(executeDate > this.date){
            
            // find how many milliseconds apart the dates are
            let difference = executeDate.getTime() - this.date.getTime()

            // select best description based on time apart
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
            // find how many milliseconds apart the dates are
            let difference = this.date.getTime() - executeDate.getTime()

            // select best description based on time apart
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
                return diff == 1 ? (diff + ' year from now') : (diff + ' years from now')
            }
        }
    }
}

module.exports.D = D