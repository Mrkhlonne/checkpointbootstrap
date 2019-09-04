function bold()
{

var getText=document.getElementById("text");
if(getText.style.fontWeight!="bold")
{

    getText.style.fontWeight="bold";

   
}else{
    getText.style.fontWeight="normal";
};

}


function italic()
{

var getText=document.getElementById("text");
if(getText.style.fontStyle!="italic")
{

    getText.style.fontStyle="italic";

   
}else{
    getText.style.fontStyle="normal";
};

}


function underline()
{

var getText=document.getElementById("text");
if(getText.style.textDecoration!="underline")
{

    getText.style.textDecoration="underline";

   
}else{
    getText.style.textDecoration="none";
};

}


function changesize(){

    document.getElementById("text").style.fontSize = document.getElementById("size").value+'px';
}



function chsize(){

    document.getElementById("text").style.fontSize = document.getElementById("size").value+'px';
}

 
$(document).ready(function(){
$(".col-md-3 button").css("opacity",0);

    $(".col-md-3").hover(function(){
        $(this).fadeTo("opacity",0.5);
        $(this).find("button").fadeTo("opacity","100");
    },
    function(){
        $(this).fadeTo("opacity",1);
        $(this).find("button").fadeTo("opacity","0");
    } 
    )
});
