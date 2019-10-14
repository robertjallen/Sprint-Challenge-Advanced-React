import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage.js'

export const useDarkMode = () => {
    const [someValue, setValue] = useLocalStorage('darkmode', true)

    useEffect(()=>{
        let bodyclass = document.querySelector('body') 
        if(someValue){
          bodyclass.classList.add('dark-mode');
        }else{
          bodyclass.classList.remove('dark-mode');  
        }  
    })
    
    return [someValue, setValue]
}