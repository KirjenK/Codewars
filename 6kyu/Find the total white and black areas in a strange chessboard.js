// https://www.codewars.com/kata/6262f9f7afc4729d8f5bef48/javascript

// My solutions

function whiteBlackAreas(cols, rows) {

    let csWhite = 0
    let rsWhite = 0
    let csBlack = 0
    let rsBlack = 0
      
      for(let i = 0; i < cols.length; i++) {
        if(!(i % 2)) {
        csWhite += cols[i]
        rsWhite += rows[i]
        } else {
        csBlack += cols[i]
        rsBlack += rows[i]
        }
      }
    return [(csWhite * rsWhite) + (csBlack * rsBlack), (rsBlack * csWhite) + (csBlack * rsWhite)]
    }

    // Cycle hypnosis // 

    function whiteBlackAreas(cols, rows) {
        let white = []
        let black = []
        for(let i = 0; i < cols.length; i = i + 2) {
          for(let j = 0; j < rows.length; j = j + 2) {
            white.push(cols[i] * rows[j])
          }
        }
        for(let i = 1; i < rows.length; i = i + 2) {
          for(let j = 1; j < cols.length; j = j + 2) {
           white.push(rows[i] * cols[j])
          }
        }
        
        for(let i = 0; i < cols.length; i = i + 2 ) {
          for(let j = 1; j < rows.length; j = j + 2) {
                black.push(rows[j] * cols[i])
          }
        }
        for(let i = 1; i < cols.length; i = i + 2 ) {
          for(let j = 0; j < rows.length; j = j + 2) {
                black.push(rows[j] * cols[i])
          }
        }
        
        let resultWhite = white.reduce((el, sum) => el + sum, 0)
        let resultBlack = black.reduce((el, sum) => el + sum, 0)
      
      return [resultWhite, resultBlack]
      }
      
      console.log(whiteBlackAreas([3,1,2,7,1],[1,8,4,5,2,]))