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

document.querySelector("#results").innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('organization')} on ${myInfo.get('businessName')} in the ${myInfo.get('location')} Temple</p><p>Your phone: ${myInfo.get('phone')} </p>
<p>Your email: ${myInfo.get('email')}</p>
<p>${myInfo.get('description')}</p>`