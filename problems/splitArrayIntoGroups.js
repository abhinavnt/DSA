const bigArray = [
  "apple", "banana", "orange", "grape", "pineapple", "mango", "kiwi", "pear", "peach", "plum",
  "cherry", "strawberry", "blueberry", "raspberry", "blackberry", "watermelon", "melon", "papaya", "guava", "fig",
  "pomegranate", "apricot", "coconut", "lemon", "lime", "avocado", "tomato", "cucumber", "carrot", "potato",
  "onion", "garlic", "ginger", "spinach", "lettuce", "cabbage", "broccoli", "cauliflower", "zucchini", "eggplant",
  "pumpkin", "sweet potato", "beetroot", "radish", "turnip", "peas", "corn", "chili", "bell pepper", "mushroom",
  "bread", "butter", "cheese", "milk", "yogurt", "cream", "rice", "wheat", "oats", "barley",
  "pasta", "noodles", "pizza", "burger", "sandwich", "biryani", "taco", "wrap", "soup", "salad",
  "chicken", "mutton", "beef", "pork", "fish", "shrimp", "egg", "tofu", "paneer", "dal",
  "cake", "cookie", "brownie", "ice cream", "donut", "pie", "pudding", "chocolate", "candy", "jam",
  "juice", "coffee", "tea", "soda", "water", "smoothie", "energy drink", "lemonade", "cola", "mocktail"
];



function groupArray(arr,n){
    let result=[]
    let temp=[]

    for(i=0;i<arr.length;i++){
        temp.push(arr[i])
        if(temp.length==n){
            result.push(temp)
            temp=[]
        }
    }


    if(temp.length>0){
        result.push(temp)
    }


    return result

}


console.log(groupArray(bigArray,3));
