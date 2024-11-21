let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;

val = document.URL;

val= document.links;  //HTML Collection
val = document.links[0]; //<a href="#" id=" delete-item 1" class="delete-item" title="iamtitle" alt="imalt"> <i class="fas fa -trash -alt"> Delete</i>

 val = document.links[3]; //<a href="#" id=" delete-item 4" class="delete-item"> <i class="fas fa -trash -alt"> Delete</i>  </a>
 val = document.links[3].id;// delete-item 4
 val = document.links[5].id // clearall 


val = document.links[3].className;//delete-item
val = document.links[3].classList;//   {   "0": "delete-item" }
val = document.links[3].classList[0]; // delete-item
val = document.links[3].classList[1]; // myitem


val =document.forms; //
val =document.forms[0]; 
val =document.forms[0].id; //form
val =document.forms[0].className; // form
val =document.forms[0].classList;  // DOMTokenList
val =document.forms[0].classList[0]; //
val = document.forms[0].action;// file:///D:/wdfbatch11/l47doctymetnobject.html
val =document.forms[0].method;// get

val =document.images;//HTML Collection
val = document.images[0]; //<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnl4Y3VieXl3cDk4ZzB3dzl2MXU1ODc0aWttMDViYmJrZjdsaXVzdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/giphy.webp" id=" loading" class="loading" alt="Loder">
val = document.images[0].id; // loading
val = document.images[0].className;//
val = document.images[0].classList;// DOMTokenList
val = document.images[0].classList[0];// loading
val = document.images[0].src; // https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnl4Y3VieXl3cDk4ZzB3dzl2MXU1ODc0aWttMDViYmJrZjdsaXVzdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/giphy.webp
val = document.images[0].alt;// Loder

val =document.scripts; //HTMLCollection
val = document.scripts[0];//<script src="./js/l47doctymentmetod.js" type="text/javascript"> </script>v
val = document.scripts[0].src; // l47doctymentmetod.js:52 
val =document.scripts[0].type; //


// console.log(val);

// => Chage Styling

// document.getElementById('tasktitle').style.backgroundColor = "green";

// document.getElementById('tasktitle').style.color = "#f4f4f4";
// document.getElementById('tasktitle').style.padding = "5px";


//=> Chage Content

// document.getElementById('tasktitle').textContent="My Job";
// document.getElementById('tasktitle').innerText="My Task";
// document.getElementById('tasktitle').innerHTML="<span style= 'color:yellow;'>My Todo </span>";

//=> Call by Class Name( Class)

// const lis = document.getElementsByClassName('list-group-item');//
// console.log(lis); //HTMLCollection(5)
// console.log(lis[2]); //

// lis[2].style.color = "black"
// lis [2].textContent = "Have to vist";
// lis [2].innerText = "Have ot go";
// lis [3].innerHTML = " Mygyi lare par" ;

// => Call by  Tag Name (Class)
    //  const litags = document.getElementsByTagName('li');
    //  console.log(litags); //      HTMLCollection
      
    //  console.log(litags[1]);

    //  litags[1].style.color = "green";
    //  litags[1].innerHTML = " Have to cook";

    // id = Element တိုရိုက်
    // classHTMLCollection
    // tag HTMLCollection

    // id Element
    // class HTMLCollection
    // Tag HTML  Collection

// => querySelector (One stop Servise)


// console.log(document.querySelector('#tasktitle'));
// console.log(document.querySelector('.card-title'))
// console.log(document.querySelector('h3'));

/*querySelector ကလေအားနည်းချက်က အများကြီးထဲ မှာခေါ်ရင် အပေါ့ဆုံးတစ်ခုပဲ ပြပေးပါတယ်...arritems. */


// console.log(document.querySelector('li')); //only first


// console.log(document.querySelector('.list-group-item'));

// document.querySelector('li').style.color = "blue";
// document.querySelector('ul li').style.color = "green";
// document.querySelector('ul li:nth-child(odd').style.color ="steelblue";
// document.querySelector('ul li:nth-child(even').style.color ="blue";

// document.querySelector('ul li:last-child').style.color= "orange";
// document.querySelector('ul li:nth-of-type(4)').style.color = "violet"

 
// => Query Selector All


// console.log(document.querySelectorAll('#tasktitle')); //NodeList
// console.log(document.querySelectorAll('#tasktitle')[0]);


// console.log(document.querySelectorAll('.card-title')); //Node List
// console.log(document.querySelectorAll('.card-title')[0]); //

 

// console.log(document.querySelectorAll('li')); //Node List
// console.log(document.querySelectorAll('li')[2]); //


// console.log(document.querySelectorAll('.list-group-item')); //Node List
// console.log(document.querySelectorAll('.list-group-item')[3]); //


// const  listitms = document.querySelector('ul').getElementsByClassName('list-group-item')
// console.log(listitms); // HTMLCollection(5)
// console.log(typeof listitms);// object
// console.log(listitms[1]); // 

// HTMLCollection(5) Ka ForEach  Non looping   တိုက်ရိုက် looping ပတ်ချင်ရင် Array.form change

// const arritems = Array.from(listitms);
// console.log(arritems);

// arritems.forEach(function(arritems){
    // console.log(arritems);
// });



// const listitms = document.querySelectorAll('ul.list-group li.list-group-item');
// // console.log(listitms); // Node List[]
// console.log(typeof listitms); //object
// // console.log(listitms[1]);// 

// listitms.forEach(function(listt,idx){
//     // console.log(listt);

//     // listt.innerText = `Hello word`;
//     listt.innerText = `${++idx} Hello world`;
// });





// const lisodds = document.querySelectorAll('li:nth-child(odd');
// console.log(lisodds);

// const lisevens = document.querySelectorAll('li:nth-child(even');
// console.log(lisevens);
// lisodds.forEach(function(lisodds){
//     lisodds.style.backgroundColor = "yellow";
// });
 
// lisevens.forEach(function(lisevens){
//     lisevens.style.backgroundColor = "blue"
// });

// for (let i=0;i < lisevens.length;i++){
//     // console.log(i); // 0 to1 
//     lisevens[i].style.backgroundColor = "steelblue";
// }

// => parent to child 

// let getli = document.querySelector('ul li');
    // getli = document.querySelector('li.list-group-item');
    getli = document.querySelector('li.list-group-item:first-child');

//     console.log(getli); 
  
// let chl;
// let getul = document.querySelector('ul.list-group');
// console.log(getul);

// chl = getul .children;
// console.log(chl);
// console.log(chl[2]);

// chl[1].textContent = "have to go";
// getul.children[3].innerText ="Have to cook";
// getul.children[4].innerHTML = 'May Prayal Kyaw  <a href="#  I love You " id=" delete-item 1" class="delete-item">   <i class="fas fa -trash -alt"></i> delete </a>';


// => Parent to Childere to children 

// chl = getul;
// chl = getul.children;
// chl = getul.children[0];
// chl = getul.children[0].children;//

// => Child Element Count 
// chl = getul.children.lenght;
// chl = getul  

// // => children to Parent Element

// const getfirstli = document.querySelector('li.list-group-item:first-child');
// console.log(getfirstli);
//                 //li           ul
// let getparent = getfirstli.parentElement;
//                 //li            ul              div.card-fotter
// getparent = getfirstli.parentElement.parentElement;
//                 //li              ul               div.card-fotter      div.card






// newli.textContent = "Hay";
// newli.innerText = "hi ";
// newli.innerHTML = " Liste Iitem 6  ";


// const newtext = document.createTextNode("Hello World");
// console.log(newtext);
// newli.appnedChild(newtext);


// // newli.appnedChild(document. )

// const newlink = document.createElement('a');
// newlink.href = "#";
// newlink.id = "deledt-item";
// newlink.className = "delete-iitem";
// newlink.classList.add('delete-item');
// newlink.innerText = "delete";

// const newitalci = document.createElement('i');
// newitalci.classList.add('fas','fa-trash','alt');

// console.log(newitalci);


// newlink.appendChild(newitalci);
// // console.log(newlink);

// newlink .appendChild(document.createTextNode('delete'));
// // emplety






// //=> Replace Element

// // replaceChild (new,old)

// // const oldtitle4 = document.getElementById('tasktitle');
// // console.log(oldtitle4);

// // const newtitle2 = document.createElement('h2');
// // newtitle2.id = "tasktitle";

// // const newcaptio = document.createTextNode("All My List");
// // newtitle2.appendChild(newcaptio);

// // console.log(newtitle2);

// // const   getcardfooter = document.querySelector('.card-fotter');
// // newtitle2.appendChild(newcaptio);

// // console.log(new)


// => Remove Child Element

// const getfirstul = document.querySelector('ul');
// console.log(getfirstli);
// getfirstul.remove();

// console.log(getfirstul.children[0]);


// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.children[2]);
// getfirstul.removeChild(getfirstul.children[3]);

// => Removee Element (selt)

// const getlsi = document.querySelectorAll('li') //Noed List
// console.log(getlsi)

// getlsi [0].remove(); //li2
// getlsi[1].remove(); //

// console.log(getlsi.length); //

// => Attrubute

// const firstli = document.querySelector('li');
// console.log(firstli);
// const firlichild = firstli.children[0];
// console.log(firlichild);
// console.log(firlichild.id);
// console.log(firlichild.href); //
// console.log(firlichild.alt); //
// console.log(firlichild.title); //
// console.log(firlichild.getAttribute('href'));
// console.log(firlichild.getAttribute('id'));
// console.log(firlichild.getAttribute('alt'));


// => ClasName VS classList

// console.log(firlichild.className); 
// firlichild.className = "deletm-myself";
// firlichild.className = "deletm-myself delete-myself";
// firlichild.className = "deletm-myself delete-myself delete-ourselve";
// firlichild.className = "deletm-myself delete-ourselve";

// console.log(firlichild.classList[0]);
// console.log(firlichild.classList[1]);

// firlichild.classList.add("delet-myselt")
// firlichild.classList.add("delet-myselt"," delete-us", "delet- youselt");


// firlichild.classList.remove("delete-us");
// firlichild.classList.remove("delet- oursserve","deldete -yourselft");


// console.log(firlichild);
// console.log(firlichild.className




    // addEventListener(event type, call back function)
const clearbtn = document.querySelector('.clear-task');

    //Method1

    clearbtn.addEventListener('click',function(e){
        // console.log("i am working");

        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);
        // console.log(e.target.className);
        // console.log(e.target.className) ;
        // console.log(e.target.classList);
        // console.log(e.target.classList[0]);
        
        // console.log(this); 
        // console.log(this.id) 

        // e.preventDefault();
    });


    // Method 2

    clearbtn.addEventListener('click',myclick);

    function myclick(e){
        e.preventDefault();
        // console.log('hello');
        // console.log(e.target)

        // console.log(this);
        // console.log(this.id);


        // e.target.innerText = "Finished";
        // this.innerText = "Done";


        // Cooridinate Event - realative to the window 
        // console.log(e);
        // const clientx = e.clientX;
        // const clienty = e.clientY;  
        // console.log(clientx,clienty);


        // Corrdinate Event - realative to the Element

        // console.log(e);
        // const offsetx = e.offsetX;
        // const offsety = e.offsetY;
        // console.log(offsetx,offsety);
    };

// =>  Mouse Event (Pointer Event)

// const clbtn = document.querySelector('.clear-task');

// Single Click 
// clbtn.addEventListener('click',mouseeventtype);


// Double Click 
// clbtn.addEventListener('dblclick',mouseeventtype);


// Mouse Down 
// clbtn.addEventListener('mousedown',mouseeventtype);


// Mouse up  (click)
// clbtn.addEventListener('mouseup',mouseeventtype);



// const card = document.querySelector('.card');

// Mouse Enter 
// card.addEventListener('mouseenter',mouseeventtype);

// Mouse over 
// card.addEventListener('mouseover',mouseeventtype);

//Mouse leave
// card.addEventListener('mouseleave',mouseeventtype);

// Mouse out
// card.addEventListener('mouseout',mouseeventtype);

// Mouse move  (1px move console.log console.log( ))
// card.addEventListener('mousemove',mouseeventtype);


//  const heading4 = document.querySelector('h4');


// function mouseeventtype(e){
//     console.log('i am working');
//     console.log(`Event type ${e.type}`);

//     heading4.textContent = `MouseX:  ${e.clientX} MouseY: ${e.clientY}`;

//     document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetX},$.5)`;
//     e.preventDefault();
// };
     




// //submit

const getform = document.querySelector('.form');

// getform.addEventListener('submit', function(e){
//     console.log(`Event type = ${e.type}`);
//     e.preventDefault();
// });



// => Input Event (keyboard Event)

//  const getinput = document.querySelector('#task');

    // keydown
// getinput.addEventListener('keydown',inputeventtype);

//keypress
// getinput.addEventListener('keypress',inputeventtype);

 //keyup

// getinput.addEventListener('keyup',inputeventtype);

    // input 
// getinput.addEventListener('input',inputeventtype);

// focus
// getinput.addEventListener('focus',inputeventtype);

// blur
// getinput.addEventListener('blur',inputeventtype);


// cut (ctrl +x)
// getinput.addEventListener('cut',inputeventtype);

// //copy(ctrl +c)
// getinput.addEventListener('copy',inputeventtype);

// paste (ctrl +v)
// getinput.addEventListener('past',inputeventtype);



// function inputeventtype(e){
//         // console.log(e.target);
//         // console.log(this);


//         console.log(`Event type = ${e.type}`);


//         // console.log(e.target.value);
//         // console.log(this.value);
//         console.log(getinput.value);
//     };


// => Event Bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('i am card-title');
// });


// document.querySelector('.card-header').addEventListener('click',function(){
//     console.log('i am card-header');
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('i am card');
// });


// Event Delgation (အတိအကျ ကိုပြောတာပါ)

// e.target  (Event)
// this()                       no same 

// const getdeleteitem = document.querySelector('.delete-item');

// console.log(getdeleteitem);

// getdeleteitem.addEventListener('click',function(e){
//     console.log('i am delete itme');

//     console.log(e.target); //i tag
//     // console.log(this); //a tag

// });





// document.body.addEventListener('click', eventdelete) ;

// function eventdelete(e){
//     // console.log(e.target);
//     // console.log(e.target.className);


    
        



    // i
    // if(e.target.className === "fas fa trash-alt"){
    //     console.log('i am working, i am trash');
    // }


            // i

            // console.log(e.target.parentElement);
            // console.log(e.target.parentElement.className);
            // console.log(e.target.parentElement);  // Logs the parent element of the clicked element
    

            // i 


            // if(e.target.parentElement.className === "delete-item"){
            //     console.log('i am working, May Prayal Kyaw')
            // }
 
            // if (e.target.parentElement.classList.contains("delete-item")){
            //     console.log('i am working, i am a work')
            // }


        

        // i            a
        // if (e.target.parentElement.classList.contains("delete-item")){
        //     // console.log('i am working ,i am tag')
        // }

        //     // i 

            // e.target.remove();


            // i       a
            // e.target.parentElement.remove();

            // i           a               li
            // e.target.parentElement.parentElement.classList.remove();
        // }
        
   

document.querySelector('#form').addEventListener('submit',function(e){
    e.preventDefault();

    // console.log('i am working');
    
    const getnewtask = document.getElementById('task').value;
//    console.log(getnewtask);

    let alltasks;

    if(localStorage.getItem('mytask') === null){
        alltasks = [];

    }else{
        // alltasks = localStorage.getItem('mytask');
        alltasks = JSON.parse(localStorage.getItem('mytask'));

        // console.log(alltasks);
        // console.log(typeof alltasks);
    
    }
   
        // push ka Arry သုံးမရပါ... 
         alltasks.push(getnewtask); //[have  to cook ]
    


    localStorage.setItem('mytasks',JSON.stringify(alltasks));
    // console.log(alltasks);

});


// {
//     [
//         JSON format
//     ]
// }

















// 29MT 










                





