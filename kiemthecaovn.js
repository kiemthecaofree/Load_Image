var time = 61;
        const myArray = [26265,37277,72615,27275,27715,71717,26116,72717,88732,83861,48827,48711,22627,83883,47772,38338,83822,748372,765262,37726,73772,74737,37738,8842,24911,24712,71292,89705,23427,39991,37031,72624,77535,73306,74266,32226,63338,61586,90406,32972,49044,96089,11282,36624,89281,98595,43754,57419,33833,15690,84480,17277,46117,55277,29647,51883,42711,81961,42908,65884,55176,66729,17419,20407,63799,94809,14269,62096,31319,51463,23863,20520,43176,88418,60735,26905,23092,79772,69418,58965,71413,90506,16131,71794,90258,44797,82165,69675,76054,93089,58972,62241,84406,47434,76916,65243,22496,87710,28031,15875,35174,86733,17061,96202,62238,73272,92996,32171,69388,53891,30990,34445,78028,17741,15627,71805,11860,51824,21967,23343,86279,46084,43647]
        let interval;
        var get_code = document.querySelector(".get_code");
         const codePro = () => {
            get_code.removeEventListener("click", codePro);
            const changeTime = () =>{
                time -- ;
                    if(time === 0){

                        get_code.innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
                        clearInterval(interval);
                        return;
                    }
                    get_code.innerHTML = "Vui lòng đợi "+time +" s";
                }
                interval = setInterval(changeTime, 1000)
        }
        get_code.addEventListener("click", codePro);
