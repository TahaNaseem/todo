//var cities =["karachi","islamabad","quetta","lahore","peshawer","multan"]
//var username = prompt("name team")


//for (var i = 0; i < cities.length; i++) {
//    console.log(cities[i])

//    if(username==cities[i])
//   {
//        alert("yes")
//    }
//    console.log(username==cities[i])
   
//}
//var text= "i am faiz";
// for (var i = 0; i < text.length; i++) {
    // if (text.slice(i, i + 4) === "faiz") {
    // text = text.slice(0, i) + "taha" + text.slice(i + 4);
    // console.log(text)
    // }
    // }

   //var text= "i am faiz";
 //for (var i = 0; i < text.length; i++) {
     //if (text.slice(i, i + 4) === "faiz") {
    // text = text.slice(i,4) 
    // console.log(text)
    // }
    // }
    
//var a = ("taha is faiz is")
//var b = a.indexOf("is",3) 
//console.log(b)

//var email = prompt("email")
//var pattent = /@./
//var passward = prompt("passward")
//var pass =/[a-zA-Z][12345]/
//if(email.match(pattent))
//{
 // alert("yes")
//}


//else{
 // alert("no")
//}
//var a =["taha","faiz","mudassir","sfaf","asodhad"]
//a.splice(0,1)
//console.log(a)

  //function show(){
      
 // var username = document.getElementById("text").value
    
   //alert("your name is: "+username);
  
//}

// switch(dayOfWk) {
//      case "Sat" :
//      alert("Whoopee");
//     break;
//      case "Sun" :
//      alert("Whoopee");
//      break;
//      case "Fri" :
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
//      }
    

//    function onBlur(i,number){

//       var inp = document.getElementsByTagName('input')
//       inp[i].style.backgroundColor = "red"
  
//       console.log("input", inp[i])
//   }
  
//    function onFocus(i,number) {
//       var inp = document.getElementsByTagName('input')
//       inp[i].style.backgroundColor = "blue"
//       console.log("input", inp[i])
//   }
  
  // const onClick = () => {
  //     var blbImage = document.getElementById("bulb")
  //     blbImage.setAttribute('src',  "https://lh3.googleusercontent.com/proxy/zozyL9QkTV1DwLyWyx-7eSjgQg46OufO1satRVjVRsZvsrM5G0UWWyfCvMGeW01-At4vJOj_oNMfRnb4IJ7wpzXmnOqrzb1sZStf8rUQPA")
      
  //     blbImage.style.height ="50px"
      
     // blbImage.style.width ="100px"
  
 //}

function submit(){
         var table = document.getElementById("inp").value;

         for (var i = 1; i<= 10; i++) {

            document.write(table + "x" + i + "=" + (i*table)+"<br/>");
            
         }
}