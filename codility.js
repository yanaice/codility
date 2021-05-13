const charater = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const solution = (S, T) => {

  if (S === T) return 'NOTHING'

  // ADD
  const canADDChar = charater.filter(char => `${S}${char}` === T)
  if (canADDChar.length > 0) {
    return `ADD ${canADDChar}`
  }

  // CHANGE
  let changeFromChar = null 
  let changeToChar = null
  for(i = 0; i < charater.length; i++) {
    changeFromChar = charater[i]

    for(j = 0; j < charater.length; j++) {
      if (S.replace(changeFromChar, charater[j]) === T) {
        changeToChar = charater[j]
        break;
      }
    }
    if (changeToChar) break;
  }
  if (changeFromChar && changeToChar) {
    return `CHANGE ${changeFromChar} ${changeToChar}`
  }

  // MOVE
  let moveChar
  let canMoveChar
  for(i = 0; i < S.length; i++) {
    moveChar = S[i]
    
    for(j = i + 1; j < S.length; j++) {
      let TEST = S.split("")
      TEST.splice(i,1) // remove position i
      TEST.splice(j,0, moveChar) // add right+1
      TEST = TEST.join("")
      
      if (TEST === T) {
        canMoveChar = moveChar
        break;
      }
    }
  }
  if (canMoveChar) return `MOVE ${canMoveChar}`

  // IMPOSSIBLE
  return `IMPOSSIBLE`

}

console.log(`=== EXAMPLE ====`)
console.log(`'nice', 'nicer' => `, solution('nice', 'nicer'))
console.log(`'nice', 'nice' => `, solution('nice', 'nice'))
console.log(`'test', 'tent' => `, solution('test', 'tent'))
console.log(`'beans', 'banes' => `, solution('beans', 'banes'))
console.log(`'o', 'odd' => `, solution('o', 'odd'))
console.log(`=== ADD ====`)
console.log(`'d', 'dd' => `, solution('d', 'dd'))
console.log(`'ddd', 'dddd' => `, solution('ddd', 'dddd'))
console.log(`'dddddddddd', 'dddddddddda' => `, solution('dddddddddd', 'dddddddddda'))
console.log(`'dddddddddd', 'ddddddddddz' => `, solution('dddddddddd', 'ddddddddddz'))
console.log(`===CHANGE====`)
console.log(`'ddd', 'add' => `, solution('ddd', 'add'))
console.log(`'abcd', 'zbcd' => `, solution('abcd', 'zbcd'))
console.log(`'azcd', 'agcd' => `, solution('azcd', 'agcd'))
console.log(`'abcd', 'abad' => `, solution('abcd', 'abad'))
console.log(`'abcd', 'abcc' => `, solution('abcd', 'abcc'))
console.log(`===MOVE====`)
console.log(`'fish', 'ifsh' => `, solution('fish', 'ifsh'))
console.log(`'fish', 'isfh' => `, solution('fish', 'isfh'))
console.log(`'fish', 'ishf' => `, solution('fish', 'ishf'))
console.log(`'fish', 'fihs' => `, solution('fish', 'fihs'))
console.log(`'fish', 'fsih' => `, solution('fish', 'fsih'))
console.log(`'fish', 'fihs' => `, solution('fish', 'fihs'))
console.log(`'superman', 'sueprman' => `, solution('superman', 'sueprman'))
console.log(`'superman', 'suermanp' => `, solution('superman', 'suermanp'))
console.log(`'superman', 'spermaun' => `, solution('superman', 'spermaun'))
console.log(`'superman', 'upermans' => `, solution('superman', 'upermans'))

console.log("===IMPOSSIBLE===")
console.log(`'ddqd', 'dddqd' => `, solution('ddqd', 'dddqd'))
console.log(`'dbda', 'dcdc' => `, solution('dbda', 'dcdc'))
console.log(`'zgd', 'zgdav' => `, solution('zgd', 'zgdav'))
console.log(`'zgd', 'gz' => `, solution('zgd', 'gz'))
