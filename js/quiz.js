var score = 0; //SEt score to 0
var total = 10; //Total number of questions
var point = 1; //Points per correct answer
var highest = total * point;

//Initializer
function init()
{
    //set correct answers
    sessionStorage.setItem('a1','b');
    sessionStorage.setItem('a2','a');
    sessionStorage.setItem('a3','c');
    sessionStorage.setItem('a4','c');
    sessionStorage.setItem('a5','c');
    sessionStorage.setItem('a6','b');
    sessionStorage.setItem('a7','a');
    sessionStorage.setItem('a8','d');
    sessionStorage.setItem('a9','b');
    sessionStorage.setItem('a10','d');
    
}

$(document).ready(function(){
    //Hide all the questions
    $('.questionForm').hide();
    
    //Show the first question
    $('#q1').show();
    $('#q1 #submit').click(function(){
        $('.questionForm').hide();
        $('#q2').fadeIn(300);
        return false;
    });
    
    $('#q2 #submit').click(function(){
        $('.questionForm').hide();
        $('#q3').fadeIn(300);
        return false;
    });
    
    $('#q3 #submit').click(function(){
        $('.questionForm').hide();
        $('#q4').fadeIn(300);
        return false;
    });
    
    $('#q4 #submit').click(function(){
        $('.questionForm').hide();
        $('#q5').fadeIn(300);
        return false;
    });
    
    $('#q5 #submit').click(function(){
        $('.questionForm').hide();
        $('#q6').fadeIn(300);
        return false;
    });
    
    $('#q6 #submit').click(function(){
        $('.questionForm').hide();
        $('#q7').fadeIn(300);
        return false;
    });
    
    $('#q7 #submit').click(function(){
        $('.questionForm').hide();
        $('#q8').fadeIn(300);
        return false;
    });
    
    $('#q8 #submit').click(function(){
        $('.questionForm').hide();
        $('#q9').fadeIn(300);
        return false;
    });
    
    $('#q9 #submit').click(function(){
        $('.questionForm').hide();
        $('#q10').fadeIn(300);
        return false;
    });
    
    $('#q9 #submit').click(function(){
        $('.questionForm').hide();
        $('#results').fadeIn(300);
        return false;
    });
});

//Add event listener
window.addEventListener('load',init,false);