var time = 101;
let interval;
var get_code = document.querySelector(".get_code");
if(get_code !== null){
         const codePro = () => {
            get_code.removeEventListener("click", codePro);
            const changeTime = () =>{
                time -- ;
                    if(time === 0){
                        get_code.innerHTML = "444444";
                        clearInterval(interval);
                        return;
                    }
                    get_code.innerHTML = "Vui lòng đợi "+time +" s";
                }
                interval = setInterval(changeTime, 1000)
        }
        get_code.addEventListener("click", codePro);
}
