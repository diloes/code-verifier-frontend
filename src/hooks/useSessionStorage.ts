export const useSessionStorage = (key: string): any | boolean => {

  const storedValue = sessionStorage.getItem(key)

  if(storedValue){
    return storedValue
  }else {
    return false
  }

}  