// Your code here
// refactor with forEach, map, reduce, and filter methods 

function createEmployeeRecord(record) {
    let employee = {}
    employee.firstName = record[0]
    employee.familyName = record[1]
    employee.title = record [2]
    employee.payPerHour = record[3]
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}   

function createEmployeeRecords(records) {
    return records.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(record, time) {
    let timeInEvent = {}
    timeInEvent.type = "TimeIn"
    timeInEvent.hour = parseInt(time.split(' ')[1])
    timeInEvent.date = time.split(' ')[0]
    record.timeInEvents.push(timeInEvent)
    return record
}

function createTimeOutEvent(record, time) {
    let timeOutEvent = {}
    timeOutEvent.type = "TimeOut"
    timeOutEvent.hour = parseInt(time.split(' ')[1])
    timeOutEvent.date = time.split(' ')[0]
    record.timeOutEvents.push(timeOutEvent)
    return record
}

function hoursWorkedOnDate(record, date) {
    let timeIn = record.timeInEvents.filter(t => t.date === date)[0]
    let timeOut = record.timeOutEvents.filter(t => t.date === date)[0]
    let hoursWorked = (timeOut.hour - timeIn.hour) / 100 // divide by 100 when dealing with elapsed military time
    // remember that #filter returns an array
    return hoursWorked
}

function wagesEarnedOnDate(record, date) {
    return hoursWorkedOnDate(record, date) * record.payPerHour
}

function allWagesFor(record) {
    // accumulate the value of all dates worked by the employee in the record used as context
    // need to use #reduce
    // need to find available dates 
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.filter(r => r.firstName === firstName)[0]
}