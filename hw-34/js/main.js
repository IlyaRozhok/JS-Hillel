'use strict';

function getDataToUl() {
    const ul = document.createElement('ul');

    if (localStorage.formData) {
        const data = JSON.parse(localStorage.formData);

        for (let key in data) {
            const li = document.createElement('li');
            if (key) {
                li.innerHTML = key+ ': ' + data[key];
                ul.append(li);
            } 
        } 
        
    } else {
        console.log('Error')
    }
    document.body.append(ul);
}
getDataToUl();