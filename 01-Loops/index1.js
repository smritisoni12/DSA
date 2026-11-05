

for(let i=0; i<3; i++){
 for(j=0; j<i; j++){
//   console.log(i,j)
 }
}
/* i | j => 1 0, 2 0, 2 1  */

for(let i=0; i<5; i++){
 for(let j=0; j<=i; j++){
//    console.log(i,j);
 }
}

for(let i=0; i<3; i++){
 for(let j=i; j>0; j--){
//      console.log(i,j);
 }
}

for(let i=5; i>0; i--){
  for(let j=0; j<i; j++){
//      console.log(i,j);
  }
}

let n = 4;
for(let i=0; i<4; i++){
    let row = " "
  for(let j=0; j<4; j++){
  row = row + "*"
  }
//    console.log(row);
}



for(let i=0; i<5; i++){
  let star = " ";
  for(let j=0; j<i+1; j++){
      star = star + "*";    
  }
  //  console.log(star);
}


for(let i=0; i<5; i++){
  let star = " ";
  for(let j=0; j<=i; j++){
    star = star + "*";
  }
  // console.log(star);
}


for(let i=0; i<5; i++){
  let number = "";
  for(let j=0; j<=i; j++){
     value = j+1;
     number = number + (j+1);
  }
  // console.log(number);
}


for(let i=0; i<5; i++){
  let number = "";
  for(let j=0; j<=i; j++){
    number = number + (i+1);
  }
  // console.log(number);
}

for(let i= 4; i>=0; i--){
  let number = "";
  for(let j=0; j<=i; j++){
    number = number + (j+1);
  }
  // console.log(number);
}

let k = 6;
for(let i=0; i<n; i++){
  let number = '';
  for(let j=0; j< n-i; j++){
    number = number + (j+1)
 }
//  console.log(number);
}


for(let i=5; i>=0; i--){
  let star = "";
  for(let j=0; j<=i; j++){
    star = star + "*"
  }
//  console.log(star);
}


for(let i=0; i<5; i++){
  let star = "";
  for(let j=0; j<5-(i+1); j++){
    star = star + "-";
  }
  for(let k=0; k< i+1; k++){
    star = star + "*"
  }
  // console.log(star);
}


for(let i=0; i<6; i++){
  let row = "";
  for(let j=0; j<i+1; j++){
    if(j%2 === 0){
      row = row + "1";
    }else{
      row = row + "0";
    }
  }
  // console.log(row);
}

/* 1
   1 0
   1 0 1 0
   1 0 1 0 1 
   1 0 1 0 1 0   */


for(let i=0; i<6; i++){
  let row = "";
  for(let j=0; j<i+1; j++){
    if(j%2 === 0 ){
      row = row + '1' 
    }else {
      row = row + '0'
    }
  }
  // console.log(row);
}

/* 1
   0 1
   0 1 0
   1 0 1 0  
   1 0 1 0 1 0   */


   let m = 5;
   let toggle = 1;
   for(let i=0; i<m; i++){
    let row = ' ';
    for(let j=0; j<i+1; j++){
      row = row + ' ' + toggle;
      if(toggle === 1){
         toggle = 0;
      }else{
        toggle = 1
      }
    }
    console.log(row);

   }