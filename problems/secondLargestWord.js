

function findSecondLargestWord(str){
   let maxWord=""
   let secondWord=""
   let word=""

   for(i=0;i<=str.length;i++){
    const charr=str[i]
    if(str[i]!==" " && i!==str.length){
        word+=charr
    }else{
        if(word.length>maxWord.length){
            secondWord=maxWord
            maxWord=word
        }else if(word.length>secondWord.length && word!==maxWord){
            secondWord=word
        }
        word=""
    }
   }

   return secondWord
}

let sentence="my name is                            abhii                                   abhinav"

console.log(findSecondLargestWord(sentence));
