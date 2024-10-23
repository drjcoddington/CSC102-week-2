function firstFunc()
{
    // this is a comment until the eol
    alert("you have created your first function!  Yeah");// comment from here to end
    /* Jill Coddington 
    line 2
    line3 
    */

}

function average(num1, num2)
{
    var avg = (num1 + num2)/2.0;
    alert("average = " + avg);
}
function playRPS()
{
    var player1 = Math.ceil(Math.random()*3);
    var player2 = Math.ceil(Math.random()*3);
    var rockImage = "rock_image.png";
    var paperImage = "paper_image.png"
    var scissorImage = "scissor_image.png";
    document.getElementById("finalResult").innerHTML = "updates"

    if (player1 == 1)
    {
        document.getElementById("player1Img").src = rockImage;
    }
    else if (player1 == 2)
    {
        document.getElementById("player1Img").src = paperImage;
    }
    else
    {
        document.getElementById("player1Img").src = scissorImageImage;
    }

    if (player2 == 1)
        {
            document.getElementById("player2Img").src = rockImage;
        }
        else if (player2== 2)
        {
            document.getElementById("player2Img").src = paperImage;
        }
        else
        {
            document.getElementById("player2Img").src = scissorImageImage;
        }

        if (player1 == player2)
        {
            document.getElementById("finalResult").innerHTML = "DRAW";

        }
        else if ((player1 == 1 && player2 == 2) || (player1 == 2  && player2 == 3)  || (player1 = 3 && player2 ==1) )
            // && means and - both conditions must be true
        // ||  means or 
        {
            document.getElementById("finalResult").innerHTML = "player 1 loses";
        }
        else
        {
            document.getElementById("finalResult").innerHTML = "player 1 wins";
        }

    
}