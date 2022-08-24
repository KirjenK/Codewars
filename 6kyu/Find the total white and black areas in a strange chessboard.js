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