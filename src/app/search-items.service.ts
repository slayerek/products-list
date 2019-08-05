import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchItemsService {

  constructor() { }
  
  getFoundItems(array,searchingString){
        
        let searchItems = [];
        let length; 
        
        for(let item of array){
            if( item.name.search(new RegExp(searchingString, "i")) > -1 ){
                searchItems.push(item);
            }
        }
        
        length = searchItems.length
        
        return { foundItems : searchItems , length : length };
        
  }
  
}
