// https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/javascript

function isSatorSquare(tablet) {
    for(let i = 0; i < tablet.length; i++) {
      for(let j = i; j < tablet.length; j++) {
        
        if(tablet[i][j] !== tablet[j][i]) { // Столбец слева !== Строке сверху
        return false
        }
        
        if(tablet[i][j] !== tablet[tablet.length - j - 1][tablet.length - i - 1]) {
        return false // Столбец слева !== строке снизу (справа - налево)
        }
        
        if(tablet[i][j] !== tablet[tablet.length - i - 1][tablet.length - j - 1]) {
        return false // Столбец слева !== Самому правому столбцу снизу вверх
        }
      }
    }
    return true
  }
  
  console.log(isSatorSquare( 
      [ ['S',  'A',   'T',  'O',  'R'],
        ['A',  'R',   'E',  'P',  'O'],
        ['T',  'E',   'N',  'E',  'T'],
        ['O',  'P',   'E',  'R',  'A'],
        ['R',  'O',   'T',  'A',  'S']  ]))
  
  
  console.log(isSatorSquare( 
      [ ['S1',  'A2',   'T3',  'O4',  'R5'],
        ['A6',  'R7',   'E8',  'P9',  'O10'],
        ['T11', 'E12',  'N13', 'E14', 'T15'],
        ['O16', 'P17',  'E18', 'R19', 'A20'],
        ['R21', 'O22',  'T23', 'A24', 'S25']  ]))
        
      // console.log(tablet[i][j] + ' Столбец слева')
      // console.log(tablet[i][i] + ' Диагональ')
      // console.log(tablet[j][i] + ' Горизонталь')
      // console.log(tablet[j][j] + ' Первая буква 0,0')
      // console.log(tablet[tablet.length-j-1][tablet.length-i-1]) - Строка снизу (справа налево)
      // console.log(tablet[tablet.length-i-1][tablet.length-j-1]) - Самый правый столбец снизу вверх