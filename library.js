if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')
    




    
const   myLibrary = []



function book(Name, Author, Pages, check){

    this.Name   =   Name;
    this.Author =   Author;
    this.Pages  =   Pages;
    this.check  =   check;

    

}

book.prototype.bname    =   function(){
    return this.Name;

}
book.prototype.bauthor    =   function(){
    return this.Author

}
book.prototype.bpages    =   function(){
    return this.Pages

}

let Submit   = document.getElementById("Btn") ;





let element1;
let element2;
let element3;



const libraryh  =   document.getElementById("books")

Submit.addEventListener("click", ()=>{
    
    let bname              =    document.getElementById("Name").value ;
    let bauthor            =    document.getElementById("Author").value;
    let bpages             =    document.getElementById("Pages").value;
    let check              =     0;
    let read               =     0;
    
    
    

    const Book             =    new book(bname,bauthor,bpages)


        element1           =    Book.bname()
        element2           =    Book.bauthor()
        element3           =    Book.bpages()
  
    let div                =   document.createElement('div');     
    let h4                 =   document.createElement('h4');
    let p                  =   document.createElement('p');                                 
    let p2                 =   document.createElement('p');   
                                
    
  
   
   h4.textContent          =    element1;
   p.textContent           =    element2;
   p2.textContent          =    element3;



   let  checkBtn           =   document.createElement('button');
        checkBtn.innerText     =   'check'
        checkBtn.style.flexDirection =   "column";
        checkBtn.style.alignSelf =   "end"
        checkBtn.style.marginRight = "10px"
        checkBtn.style.marginTop=   "50px"

   checkBtn.addEventListener('click', function(){
   
    if(check    === 0){
        return check=1,  checkBtn.style.backgroundColor   =   "#FAA0A0", checkBtn.innerText =   "Checked" }
        else    if(check    === 1){
            return  check=0, checkBtn.style.backgroundColor   =   "#faebd7", checkBtn.innerText =   "Check"
        }

   })

    let readBtn =   document.createElement('button');
        readBtn.innerText   =   "Read"
        readBtn.style.flexDirection =   "column";
        readBtn.style.alignSelf =   "end"
        readBtn.style.marginRight = "10px"


        readBtn.addEventListener("click", function(){
            if(read     ===0){
                return  read=1, readBtn.style.backgroundColor   =   "#90EE90"
            }else if(read   ===1){
                return read=0, readBtn.style.background =   "inherit"
            }
        })
   
  
  


   div.appendChild(h4);
   div.appendChild(p);
   div.appendChild(p2);
   div.appendChild(readBtn)
   div.appendChild(checkBtn);
   
   
   libraryh.appendChild(div);

 
  let deleteBtn =   document.getElementById("dltBtn")
  deleteBtn.addEventListener('click', function(){
    if (check   ===   1){
        libraryh.removeChild(div)
        console.log(check)
    }
  })
    


console.log(check)

})










 
}
