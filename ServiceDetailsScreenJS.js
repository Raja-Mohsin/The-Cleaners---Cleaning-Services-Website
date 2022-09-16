function submitButton()
{
    var nameValue = document.getElementById("name").value;
    var phoneValue = document.getElementById("name").value;
    var addressValue = document.getElementById("name").value;
    
    if(nameValue == "" || nameValue.length < 4)
    {
        alert('Enter a valid name');
        return;
    }
    else if(phoneValue == "" || phoneValue.length < 10 || phoneValue.length > 11)
    {
        alert('Enter a valid phone number');
        return;
    }
    else if(addressValue == "" || addressValue.length < 10)
    {
        alert('Enter a valid and complete address');
        return;
    }
    else
    {
        
    }

}
