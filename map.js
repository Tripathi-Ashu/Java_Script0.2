

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


async function  maps() {

    const mapp = await getUser();

    const titles =  mapp.map((ashu)=>{
       if( ashu.id >20)
         return ashu.title;
    });

     for(const num of titles){
        console.log(num);
     }

}

maps();