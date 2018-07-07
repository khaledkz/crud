// import PricesList from '../reducers/Reducer'

// describe('pricelist', () => {
//     test('updateCurency', () => {

//         let ProductList={currency:'$',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:10},{product:'Eggs',price:8},{product:'Milk',price:4},{product:'Beans',price:2}]}
//         let action ={ type: 'updateCurency', newCurrency:{currency:'£',value:0.5}};
        
//         const result = PricesList(ProductList,action);
//         let newResult={currency:'£',extchangeRate:0.5,shoppingCart:[],products:[{product:'Peas',price:'5.00'},{product:'Eggs',price:'4.00'},{product:'Milk',price:'2.00'},{product:'Beans',price:'1.00'}]}

//         expect(result).toEqual(newResult)
//     })

//     test('resetStore', () => {
//         let state={currency:'$',extchangeRate:1,shoppingCart:[{a:'asa'}],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}

//         const result=PricesList(state,{type:'resetStore'});

//         let newResult={currency:'$',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}

 
//         expect(result).toEqual(newResult)
//     })


//     test('updatePrices', () => {

//         let state={currency:'$',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}
//         const result=PricesList(state,{type:'updatePrices',products:[{product:'Peas',price:2.95},{product:'Eggs',price:4.10},{product:'Milk',price:6.30},{product:'Beans',price:8.73}]});

//         let newResult={currency:'$',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}

 
//         expect(result).toEqual({currency:'$',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:2.95},{product:'Eggs',price:4.10},{product:'Milk',price:6.30},{product:'Beans',price:8.73}]})
//     })

//     test('updateCart', () => {
//         let state={currency:'$',extchangeRate:1,shoppingCart:[],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}

//         const result=PricesList(state,{type:'updateCart',shoppingCart:[{product:'Peas',price:0.95,number:5},{product:'Eggs',price:2.10,number:15}]});

//         let newResult={currency:'$',extchangeRate:1,shoppingCart:[{product:'Peas',price:0.95,number:5},{product:'Eggs',price:2.10,number:15}],products:[{product:'Peas',price:0.95},{product:'Eggs',price:2.10},{product:'Milk',price:1.30},{product:'Beans',price:0.73}]}

 
//         expect(result).toEqual(newResult)
//     })

    


// })