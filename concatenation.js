var numString = [];
$(function enterValue() {
   
    $('#numStringForm').on('submit', enterValue())
    numString.push($('#numStringForm :textarea').val());
    console.log(JSON.stringify(numString));
    
    //sum of array
    var sum = 0;
    for (var i = 0; i <numString.length; i++){
        sum = sum + numString[i];
    } 
    
    if ($.isInteger($'#numStringForm :textarea').val())
    {
        $('#count').text(numString.length);
        $('#sum').text(sum.toFixed());
        $('#mean').text(sum/count.toFixed());
    }
    else if (typeof ('#numStringForm :textarea') === 'string'){
        $('#words').text(numString.length);
        $('#concatenate').text(numString.join(' '));
    };

$('#reset').click(function resetForm(){
    location.reload();
                  
 });
}
    
 


