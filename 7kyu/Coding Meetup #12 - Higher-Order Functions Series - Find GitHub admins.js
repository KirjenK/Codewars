// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

// My solution

function findAdmin(list, lang) {
  let getAdmin = list.filter((obj) => {
    if(obj.language === lang && obj.githubAdmin === 'yes') {
      return obj
    }
  })
    return getAdmin
  }