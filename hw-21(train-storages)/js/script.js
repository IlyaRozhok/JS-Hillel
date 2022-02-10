//train with storages
'use strict';
(function() {
    const formData = {
        formId: 'form',
        getData() {
            const form = document.getElementById(this.formId)

            form.addEventListener("submit", event => {
                event.preventDefault();
                const inputs = Array.from(
                    form.querySelectorAll('input, select, textarea')
                )
                    .reduce((accum, item) => {
                        accum[item.name] = item.value;
                        return accum;
                    }, {})
                localStorage.setItem('dataForm', JSON.stringify(inputs));
            })
            if (localStorage.dataForm) {
                this.setData();
            } else console.log('Storage is clear')

        },
        setData() {
            document.addEventListener('DOMContentLoaded', () => {
                const form = document.getElementById(this.formId)
                const data = JSON.parse(localStorage.getItem('dataForm'));
                form
                    .querySelectorAll('input, select')
                    .forEach(item => {
                        item.value = data[item.name];
                    })
            })
        }

    }
    formData.getData();
    })();