// Function accept a full name string and convert each letter of
// first world to Capital and the remaining to small (Pascal
// Case). //Example : 'the quick brown fox'
// //Output : 'The Quick Brown Fox'

function toCamelCase(name){
    return name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
}


// Function that accept a sentence and return the longest word
// within the input
// //Example : 'Web Development Tutorial'
// //Output : 'Development'

function longest_word(sentence){

    var words=sentence.split(' ');
    var maxLen="";
    for(i=0;i<words.length;i++){
        if(words[i].length>maxLen.length){
            maxLen=words[i];
        }
    }
    return maxLen;
}


// Write a JavaScript Function that returns a passed string with
// letters in alphabetical order
// //Example : javascript
// //Output : aacijprstv

function alphaSort(word){
    return word.split('').sort().join('');
}



// Write a function that takes two arrays and returns an array of common
// elements using filter() or a loop.
// //Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].

function commonElements(arr1 ,arr2){
    return arr1.filter(element => arr2.includes(element));
}

function commonFor(arr1,arr2){
    var elements=[];
    for (i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                elements.push(arr1[i]);

            }
        }
    }
    return elements;
}


// make Array of duplicates numbers and remove it in new array

function removeDuplicate1(arr) {
    var unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
    }

    return unique;
}
function removeDuplicate2(arr) {
    var unique = [];

    for ( i = 0; i < arr.length; i++) {
        var isDuplicate = false;
        for ( j = 0; j < unique.length; j++) {
            if (unique[j] == arr[i]) {
                isDuplicate = true;
            }
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique;
}