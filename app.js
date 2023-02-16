/* 

Event Dalegate:  We just want to click a item and it takes us to the new page with the new location. We can use here event dalegate so that we can use only one eventListener.


If Condition: We make a condition for controll the click area. This event work only when we click on the li tag to the web page.

*/


document.querySelector('#category').addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        window.location.href = "/" + e.target.id;
    }
})