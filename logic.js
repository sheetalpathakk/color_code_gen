//event call on click
const getcolor=()=>{
    const random_num=Math.floor(Math.random()*16777215);
    const hexcode="#"+ random_num.toString(16);
    document.getElementById("code").innerText=hexcode;
    document.body.style.backgroundColor=hexcode;
    console.log(hexcode);
//automatic clipboard copy code
    navigator.clipboard.writeText(hexcode);

}
//initial call
getcolor();


 


