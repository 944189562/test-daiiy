const array = ['pickupStoreId', 'pickupDate','vehicleId', 'returnStoreId']

function getIsFetch(array, allValues){
  let flag = true
  for(let key of array){
    if(allValues[key]){
      flag = false
    }
  }
  return flag
}