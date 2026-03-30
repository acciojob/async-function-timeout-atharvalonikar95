//your JS code here. If required.
const msgVal=document.getElementById("text")
const delayVal=document.getElementById("delay")
const btn=document.getElementById("btn")
const opmsg=document.createElement("p")
const output =document.getElementById("output")

const handleOnSubmit=async()=>{
	let msg = await msgVal.value;
	let delay= await delayVal.value;
	setTimeout(()=>{
		opmsg.textContent=  msg
	}, delay)
}

btn.addEventListener('click',()=>handleOnSubmit())
output.append(opmsg)
