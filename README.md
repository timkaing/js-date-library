# Date Library
![Travis (.com)](https://img.shields.io/travis/com/daisukiyo/js-date-library)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/daisukiyo/js-date-library)
## Description

A simple date library which utilizes the JS Date Object to perform four useful operations

1. instantiating a date object given a date string
2. convert the date object into readable values
3. format a date given a mask string
4. discover when a date occurs/occured

This library can also be found on NPM

# Installation (coming soon)

Run the Following command in your project's directory:
```
npm i tk-date-library --save
```
Once installed, require it on the top of your applications main point of entry (index.js):
```
require('tk-date-library')
```

# Functions

## Date Object Instantiation

The date object can be instantiated in four ways:

### Examples

```javascript
const myDateA = new D() // empty
const myDateB = new D() // value (milliseconds)
const myDateC = new D('06/09/1996') // dateString
const myDateD = new D('1996, 6, 9, 0, 0, 0') // individual date/time components
```

Instantiates a Date Object: ```D { date: 2019-08-05T03:00:26.598Z }```

## Get Values

The following classes provide human readable values for:
- year
- month
- date
- hour
- minutes
- seconds

### Examples

```javascript
const myDate = new D('1996, 6, 9, 4, 2, 0')

console.log(myDate.year()) // 1996
console.log(myDate.month ()) // June
console.log(myDate.day()) // 9
console.log(myDate.hours()) // 4
console.log(myDate.mins()) // 2
console.log(myDate.secs()) // 0

```
Returns the value as a String

## Convert "Mask" String to Formatted Date

The following method takes in a "mask" string and produces an acceptable formatted date.

List of formatting characters
- 'Y' -> 2019
- 'y' -> 19
- 'M' -> July
- 'm' -> Jul
- 'D' -> 01
- 'd' -> 1
- 'H' -> 05
- 'h' -> 5
- 'I' -> 08
- 'i' -> 8
- 'S' -> 04
- 's' -> 4

### Examples

```javascript
const myDate = new D('1996, 6, 9, 4, 2, 0')

console.log(myDate.format()) // 1996 June 09
console.log(myDate.format('y/m/d')) // 96/Jun/9
console.log(myDate.format('H:I:S')) // 04:02:00
console.log(myDate.format('h:i:s')) // 4:2:0
console.log(myDate.format('Y0M0D h:I:S')) // 1996-June-09 4:02:00

```
Returns a formatted date as a String

## Find When a Date Occurs/Occured

The following method compares the date owned by your class with the current date(when the method is executed)

### Examples

```javascript
// NOTE: As time continues, the expected output will also change

const a = new D(2019, 0, 2, 3, 4, 5)
console.log(a.when()) // 6.xx months ago

const b = new D(2019, 9, 2, 3, 4, 5)
console.log(b.when()) // 3.xx months from now

const c = new D(2024, 9, 2, 3, 4, 5)
console.log(c.when()) // 5.xx years from now

const d = new D(2019, 6, 30, 3, 4, 5)
console.log(d.when()) // 3.xx days from now
```
Returns a when a date will occur as a String



