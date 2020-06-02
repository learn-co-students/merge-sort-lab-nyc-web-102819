function findMinAndRemoveSorted(arr){
  return arr.shift()
}

function merge(firstSubArr, secondSubArr){
  let sorted = []
  while(firstSubArr.length != 0 && secondSubArr.length != 0){
    if(firstSubArr[0] < secondSubArr[0]){
      sorted.push(findMinAndRemoveSorted(firstSubArr))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArr))
    }
  }
  return sorted.concat(firstSubArr).concat(secondSubArr)
}

function mergeSort(arr){
  let midpoint = arr.length/2
  let firstHalf = arr.slice(0, midpoint)
  let secondHalf = arr.slice(midpoint, arr.length)
  let sorted;

  if(arr.length < 2){
    return arr
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
