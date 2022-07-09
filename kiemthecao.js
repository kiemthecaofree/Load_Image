<script type="text/javascript">
        var time = 61;
        const myArray = [26265, 37277, 72615, 27275, 27715, 71717, 26116, 72717, 88732, 83861, 48827, 48711, 22627, 83883, 47772, 383838, 83822]
        let interval;
        var get_code = document.querySelector(".get_code ");
        get_code.addEventListener("click", ()=>{
            const changeTime = () =>{
            time -- ;
                if(time === 59){

                    get_code.innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
                    clearInterval(interval);
                    get_code = null;
                    return;
                }
                get_code.innerHTML = "Vui lòng đợi "+time +" s";
            }
            interval = setInterval(changeTime, 1000)
        });
    </script>
