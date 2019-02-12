var btnOneNum=0;
var btnTwoNum=0;
var btnThreeNum=0;
var btnFourNum=0;
var wins=0;
var losses=0;
var targetNum=0;
var currentNum=0;

    // This will (hopefully) reset random numbers to all be different and displays them with new score and win-loss
    function reset(){
        
        btnOneNum=Math.floor(Math.random() * 12 + 1);
        btnTwoNum=Math.floor(Math.random() * 12 + 1);
        btnThreeNum=Math.floor(Math.random() * 12 + 1);
        btnFourNum=Math.floor(Math.random() * 12 + 1);
        
        if (btnTwoNum===btnOneNum){
            while (btnTwoNum===btnOneNum){
                btnTwoNum=Math.floor(Math.random() * 12 + 1);  
                }
        } if (btnThreeNum==btnOneNum||btnTwoNum==btnThreeNum){
            while (btnThreeNum==btnOneNum||btnTwoNum==btnThreeNum){
                btnThreeNum=Math.floor(Math.random() * 12 + 1);  
                }
        } if (btnFourNum===btnOneNum||btnTwoNum===btnFourNum||btnFourNum===btnThreeNum){
            while(btnFourNum===btnOneNum||btnTwoNum===btnFourNum||btnFourNum===btnThreeNum){
                btnFourNum=Math.floor(Math.random() * 12 + 1); 
                }
        }

        console.log(btnOneNum);
        console.log(btnTwoNum);
        console.log(btnThreeNum);
        console.log(btnFourNum);

        targetNum=Math.floor(Math.random() * 101 + 19);
        currentNum=0;
        $("#targetNumber").text(targetNum);
        $("#scoreBox").text(currentNum);
        $("#winLoss").text("Wins : "+wins+" || Losses: "+losses);
    }
    reset();

    // For the button clicks to function
    $("#btnOne").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnOneNum;
        $("#scoreBox").text(currentNum);
       
    });

    $("#btnTwo").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnTwoNum;
        $("#scoreBox").text(currentNum);
       
    });

    $("#btnThree").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnThreeNum;
        $("#scoreBox").text(currentNum);
       
    });

    $("#btnFour").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnFourNum;
        $("#scoreBox").text(currentNum);      
       
    });

    // This will tell us if we've won or lost. 
    $(".crystalBtn").click(function(){
        if (currentNum===targetNum){
            wins ++;
            alert("You escaped with your haul!", 3500);
            reset();

        }  else if (currentNum>targetNum){
            losses++;
            alert("Lost in the cavern...", 3500);
            reset();

        }  
    });
        
    

    