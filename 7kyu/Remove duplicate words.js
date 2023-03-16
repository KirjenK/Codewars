// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

function removeDuplicateWords (s) {
  let newArr = s.split(' ').filter(function(item, i, allitem){
  return i == allitem.indexOf(item)
  }).join(' ')
  return newArr
  }