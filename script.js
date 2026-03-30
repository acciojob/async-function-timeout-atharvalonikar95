//your JS code here. If required.
const msgVal=document.getElementById("text")
const delayVal=document.getElementById("delay")
const btn=document.getElementById("btn")
const opmsg=document.createElement("p")
const output =document.getElementById("output")

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
const handleOnSubmit=async()=>{
	let msg = await msgVal.value;
	let delay= await delayVal.value;
	await wait(delay)
	opmsg.textContent=  msg
}

btn.addEventListener('click',()=>handleOnSubmit())
output.append(opmsg)
