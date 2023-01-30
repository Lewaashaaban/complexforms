let string1="how are you, and how you doing?";
function replaceAll(string1,flag,replacedword)
{
    let string=string1.split(flag);
    return string.join(replacedword);
}
let final=replaceAll(string1,"how","what");
console.log(final);



let s1="lewaa";
let s2="shaaban";
function concat(...string)
{
    return string.join(" ");
}
let sfinal=concat(s1,s2);
console.log(sfinal);