var btnMenu = document.getElementById("toggle-menu");
var menu = document.getElementById("nav");

btnMenu.onclick = function() { 
    menu.classList.toggle("active");
    btnMenu.classList.toggle("active");
};

var a = new Date(1991, 3, 21);
var b = new Date();

function dateDiffInYears(dateold, datenew) {
            var ynew = datenew.getFullYear();
            var mnew = datenew.getMonth();
            var dnew = datenew.getDate();
            var yold = dateold.getFullYear();
            var mold = dateold.getMonth();
            var dold = dateold.getDate();
            var diff = ynew - yold;
            if (mold > mnew) diff--;
            else {
                if (mold == mnew) {
                    if (dold > dnew) diff--;
                }
            }
    
            document.getElementById("year").innerHTML = diff;
            return ynew;
        }

document.onload = dateDiffInYears(a, b);