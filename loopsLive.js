function forLoopFunc()
{
    var i =1;
    for (i = 1; i< 4;i++)  // i++ means i = i +1 
    {
        alert("for loop i = "+ i);
    }
}

function doLoopFunc()
{
    var i = 10;
    do
    {
        alert("do loop i = "+ i);
        i--;  //i = i-1

    }  while (i>10);
}

function whileLoopFunc()
{
    var i = 10;
    while (i>0)
    {
        alert("while loop i = " +i);
        i--;

    }
    alert("after while loop")
}