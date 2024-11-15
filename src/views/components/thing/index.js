
import config from '../../../../config.js';
import ModelCategory from '../../../models/categories/index.js';

class LayoutThing{

    constructor(){          
        this.modelCategories = new ModelCategory();               
    }

    async create(container, allThings, link=true, whereView = ''){    
            document.querySelector(".things-list").innerHTML = "";   
            if(allThings.error === '' && allThings.result.length <= 0) console.log('Não tem registro');           
            

            for (let i = 0; i < allThings.result.length; ++i) {                

                let a  = document.createElement("a");
                let figure = document.createElement("div");
                let img = document.createElement("img");
                let figCaption = document.createElement("div");             
                let thingId = document.createElement("span");             
                let header = document.createElement("span");             
                let category = document.createElement("span");             
                let local = document.createElement("span");             
                let description = document.createElement("span");             
                let divImg = document.createElement("div");             

                if(link){
                    a.setAttribute("href",`${config.urlBase}/src/views/${whereView}/?id=${allThings.result[i].id}`);
                }

                figure.setAttribute("data-id",allThings.result[i].id);                        
                figure.setAttribute("class",'figure');                        
                img.setAttribute("src",`${config.urlBase}/`+allThings.result[i].image_address);                        
                img.setAttribute("alt",allThings.result[i].description);  
                thingId.appendChild(document.createTextNode(`${allThings.result[i].id} - `));  
                local.textContent = allThings.result[i].local;  
                description.textContent = allThings.result[i].description;  
                
                //let categoryName = await this.modelCategories.get(allThings.result[i].category_id) ?? null;
                //category.appendChild(document.createTextNode(`${categoryName.result.name}`));  
                
                category.appendChild(document.createTextNode(`${allThings.result[i].category_name}`));
                
                header.setAttribute('class','thing-header');  
                header.appendChild(thingId);  
                header.appendChild(category);  
                
                figCaption.setAttribute("class",'figcaption');

                figCaption.appendChild(header);            
                figCaption.appendChild(local);
                figCaption.appendChild(description);
                    
                divImg.appendChild(img);
                figure.appendChild(divImg);
                figure.appendChild(figCaption);                                         
                a.appendChild(figure);
                
                container.appendChild(a);
               
            }

        
        
    }

}

export default LayoutThing;