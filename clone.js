
const m = moment()
const m2 = m
// const m2 = m.clone()
// const m2 = moment(m)
m.add(3,'y')

console.log("m", m.format(format))
console.log("m2", m2.format(format))