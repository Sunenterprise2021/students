
window.open('errormessage.html');

// disable right click 
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    swal("Right Click is Disabled By Administrator.","","warning");    
    }, false);


    // onclick alert Ripan 
    function reRipan(){
        const confirmation = confirm (" This link redirected you to the e-receipt page.\n Are you sure open this external link ?");
        if(confirmation == true)
        {
            window.open("https://1drv.ms/w/s!Apfhsxe4GUctghbPUSEmcSmF2CdG?e=zVWDst","_blank  ");
            return true;
        }
        else{
            swal("Redirection Failed","Because you clicked 'Cancel' button.","error");
            return false;
        }
    }

     // onclick alert Bumba
     function reBumba(){
        const confirmation = confirm (" This link redirected you to the e-receipt page.\n Are you sure open this external link ?");
        if(confirmation == true)
        {
            window.open("https://1drv.ms/w/s!Apfhsxe4GUctghKpEkm3KROqJvbP?e=HoC4DO","_blank  ");
            return true;
        }
        else{
            swal("Redirection Failed","Because you clicked 'Cancel' button.","error");
            return false;
        }
    }

     // onclick alert Sayan
     function reSayan(){
        const confirmation = confirm (" This link redirected you to the e-receipt page.\n Are you sure open this external link ?");
        if(confirmation == true)
        {
            window.open("https://1drv.ms/w/s!Apfhsxe4GUctghc8yoXMRllqOqQc?e=11WgVV","_blank  ");
            return true;
        }
        else{
            swal("Redirection Failed","Because you clicked 'Cancel' button.","error");
            return false;
        }
    }

     // onclick alert Anu
     function reAnu(){
        const confirmation = confirm (" This link redirected you to the e-receipt page.\n Are you sure open this external link ?");
        if(confirmation == true)
        {
            window.open("https://1drv.ms/w/s!Apfhsxe4GUctghkw_Xdaj7lfAGsY?e=SJkbKo","_blank  ");
            return true;
        }
        else{
            swal("Redirection Failed","Because you clicked 'Cancel' button.","error");
            return false;
        }
    }
