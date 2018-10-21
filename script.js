

//define collection of accordion items and heading to add event handler


// var accContent = document.getElementsByClassName('accordionItemContent');
//new request
var request = new XMLHttpRequest();
request.open('GET', 'https://design.propcom.co.uk/buildtest/accordion-data.json', true);

request.onload = function () {
//accessing JSON data
var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400){
       
        // iterate the data to DOM elements
       var blocksContent = data.blocks;
       var jsonLength = blocksContent.length;
       
       for (let i = 0; i < jsonLength; i++) {
        const accItem = document.createElement('div');
        accItem.setAttribute('class', 'accordionItem collapse');

        const accHeading = document.createElement('div');
        accHeading.setAttribute('class', 'accordionItemHeading');

        const arrow = document.createElement('span');
        arrow.setAttribute('class', 'acc-arrow');

        const img = document.createElement('img');
        img.src = 'img/arrow.png';
        img.alt = 'arrow';

        const accContent = document.createElement('div');
        accContent.setAttribute('class', 'accordionItemContent');

        const h = document.createElement('h1');
        h.textContent = data.blocks[i].heading;

        const p = document.createElement('p');
        p.textContent = data.blocks[i].content;
        

        var accSection = document.getElementById('accordion');
        accSection.appendChild(accItem);
        accItem.appendChild(accHeading);
        accItem.appendChild(accContent);
        accHeading.appendChild(h);
        arrow.appendChild(img);
        accHeading.appendChild(arrow);
        accContent.appendChild(p);
        
       }
       const accHeading = document.getElementsByClassName('accordionItemHeading');
       const accItem = document.getElementsByClassName('accordionItem');
       //eventHandler
       for (let i = 0; i < accHeading.length; i++) {
        accHeading[i].onclick = rollOver;
        }
    
        //function passed a 'clicked' element
        function rollOver () {
            const accItemClass = this.parentNode.className;
            //reset all acordions to make sure they are 'off'
            for (let i = 0; i < accItem.length; i++) {
                accItem[i].className = 'accordionItem collapse';
            }
            
            if (accItemClass == 'accordionItem collapse'){
                this.parentNode.className = 'accordionItem open';
            }
    
        }
    }

}

request.send();


