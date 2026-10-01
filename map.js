

// fetch('https://dummyjson.com/docs/products').then((res)=> res.json())
// .then((data)=> {
//     console.log(data);
// })
// .catch((error) => {
//     console.log('Error:' ,error);
// });


async function getUser() {

    try{

       const response = await fetch('https://dummyjson.com/products').then((res)=> res.json());
       
       const data = response.products;

       return data;
         
    }catch(error){
        console.log('Error:' , error);
    }
}

console.log(getUser());

// async function printforEach(){
//     const product = await getUser();

//     product.forEach((title)=> {
//         console.log(title.title);
//     }) 

// };

// printforEach();

// const product = await getUser();

// product.forEach((item) => {
//   console.log(item.title);
// });


// async function  maps() {

//     const mapp = await getUser();

//     const titles =  mapp.map((ashu)=>{
//        if( ashu.id >20)
//          return ashu.title;
//     });

//      for(const num of titles){
//         console.log(num);
//      }

// }

// maps();


// async function filters() {

//     const getUsers = await getUser();

//     const gettitle = getUsers.filter((titlts)=> {
//         if(titlts.id > 20 )
//             return titlts.title;
//     });


//     for(const title of gettitle){
//         console.log(title.title);
//     }; 
// }

// filters()


// async function add () {
//     const Data = await getUser();

//     const value =  Data.reduce((sum, id )=>{
//         const total = sum + id.price;
//         return total;
//     }, 0); 

//     console.log(avg);
// }

// add();

// async function finds () {
//     const Data = await getUser();

//     const output = Data.find((title)=>{
//         if(title.id = 5)
//             return title.title;

//     });

//     console.log(output);
// };

// finds();


// async function somes () {

//     const Data = await getUser();

//     const output = Data.some((user) =>{
//         return user.id === 5;
//     })

//     console.log(output);
    
//  };

//  somes();

// async function sets () {

//     const Data = await getUser();

//     const catagori = Data.map((product) => product.category);

//     const uniqueseet = new Set(catagori);

//     console.log(uniqueseet);

//     uniqueseet.add('new-style');
//     console.log(uniqueseet);

//     uniqueseet.has('beauty');
//     console.log(uniqueseet);

//     uniqueseet.delete('groceries')
//     console.log(uniqueseet);
// }


// sets();

const users = new Map();

users.set('Ashutosh' , '9876543210');
users.set('Rahul' , '9832432432');
users.set('pria' , '9876543212');

// console.log(users);

//console.log(users.get('Ashutosh'))  

for(const [name, no] of users) {
   // console.log(name , no);
}

for(const name of users.keys()) {
    // console.log(name);
} 

for (const no of  users.values()){
    // console.log(no);
}



// value return hogi 

//set(key , value)
// get(key) -> vlaue



async function catagries () {

    const product = await getUser();

    const newMap = new Map();

    product.forEach((products)=>{
        const catagri = products.category;

        if(newMap.has(catagri)){
            newMap.set(catagri , newMap.get(catagri) + 1);
           
        }else{
            newMap.set(catagri , 1);

        }

    });

    for (const [catgri , count] of newMap){
        console.log(`${catgri} has ${count } product`)
    };

    
}

catagries();