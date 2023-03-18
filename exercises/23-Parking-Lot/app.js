

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(nestedArray) {
  let obj ={
    'totalSlots': 0,
    'availableSlots': 0,
    'occupiedSlots': 0,
  };
  for (let i in nestedArray) {
    nestedArray[i].forEach(element => {
      if (element === 1) 
      obj['occupiedSlots'] = obj['occupiedSlots'] + 1;
      else if (element === 2)
      obj['availableSlots'] = obj['availableSlots'] + 1;
    });
    obj['totalSlots'] = obj['occupiedSlots'] + obj['availableSlots'];
  };
  return obj;
}

console.log(getParkingLotState(parking_state))