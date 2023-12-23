//Function to find unique elements in an array


function findUniqueElements(arr){
    let uniqueElements =[];

    for(let i = 0; i<arr.lenght;i++){
        let isUnique = true;


        for(let j=0; j<uniqueElements.length; j++){
            if(arr[i]=== uniqueElements[j]){
                isUnique = false;
                break;
            }
        }

        if(isUnique){
            uniqueElements.push(arr[i])
        }
        
        return uniqueElements

    };
}


//Object operation

function createCar(brand,model,year){
    return{
        brand: brand,
        model: model,
        year: year
    }
}

function mergedCars(car1,car2){
    return{
        ...car1,
        ...car2
    }
}


const car1 = createCar("toyota","Camry"," 2007");
const car2 = createCar("bmw", "x5", "2012");

const mergedCar = mergedCars(car1,car2);

console.log(mergedCar);


//Logical Operations

function findCommonElements(array1,array2){
    const commonElements = [];

    for(let i = 0; i < array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i]===array2[j]){
                commonElements.push(array1[i]);
                break;
            }
        }
    }

    return commonElements;
}

const array1 = [1,2,4,3,5];
const array2 = [1,2,6,7,8];

const result = findCommonElements(array1,array2);
console.log(result)

