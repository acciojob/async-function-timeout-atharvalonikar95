//your JS code here. If required.
const msgVal=document.getElementById("text")
const delayVal=document.getElementById("delay")
const btn=document.getElementById("btn")
const output =document.getElementById("output")


function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
const handleOnSubmit=async()=>{
	let msg =  msgVal.value;
	let delay=  delayVal.value;
	output.innerHTML = "";
	const opmsg = document.createElement("p");
	output.append(opmsg);
	await wait(delay)
	opmsg.textContent=  msg
}

btn.addEventListener('click',()=>handleOnSubmit())
