const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('businessName'));
console.log(myInfo.get('status'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('description'));
console.log(myInfo.get('timestamp'));

document.querySelector("#results").innerHTML = `
<p>Full Name: ${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
<p>From ${myInfo.get('businessName')} of ${myInfo.get('organization')} who wants the ${myInfo.get('status')} membership</p><p>Your phone: ${myInfo.get('phone')} </p>
<p>Your email: ${myInfo.get('email')}</p>
<p>The message: ${myInfo.get('description')}</p>
<p> Time: ${myInfo.get('timestamp')}</p>`