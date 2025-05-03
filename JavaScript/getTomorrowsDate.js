
function getTomorrowDate  () {
    let today = new Date();
    let tomarrow  =  new Date(today);
    tomarrow.setDate(today.getDate() + 1);


    return tomarrow.toISOString().split('T')[0].split('-').reverse().join('-').replace(/-/g, '/')

}

console.log(getTomorrowDate())

