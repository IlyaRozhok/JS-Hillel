'use strict';
(function () {
    const formData = {
        formId: 'form',
        form: null,

        setLocalData() {
            const form = document.getElementById(this.formId);

            form.addEventListener("submit", event => {
                event.preventDefault();
                const inputs = Array.from(
                    event.target.querySelectorAll('input, textarea, select')
                )
                    .reduce((accum, item) => {
                        accum[item.name] = item.value;
                        return accum;
                    }, {})

                localStorage.setItem('inputsData', JSON.stringify(inputs));


            })
            if (localStorage.inputsData) {
                this.setInputsData();
            } else {
                console.log('New user')
            }
            return this.form = form;
        },

        setInputsData() {
            document.addEventListener('DOMContentLoaded', () => {

                const parsedData = JSON.parse(localStorage.getItem('inputsData'));
                this.form.querySelectorAll('input, select')
                    .forEach( (item) => {
                    item.value = parsedData[item.name];
                })
            })
        }

    }



formData.setLocalData();
})
();
