'use strict';

(function () {
    function createHandler(formId, todoContainerId) {
        return {
            formId,
            todoContainerId,
            todoWrapper: null,
            form: null,
            itemId: 0,

            findForm() {
                const form = document.getElementById(this.formId);
                form ? this.form = form : null;
            },
            findToDoWrapper() {
                if (!todoContainerId) throw new Error('Wrong Todo Container ID')
                this.todoWrapper = document.getElementById(this.todoContainerId);
            },
            setEvents() {
                this.form.addEventListener('submit', this.formHandler.bind(this))
                document.getElementById('clear')
                    .addEventListener('click', () =>
                        this.rmAllData())

                document.addEventListener('DOMContentLoaded', this.onloadHandler.bind(this))

                this.todoWrapper.addEventListener('click', this.removeTodo.bind(this))

                const options = {};
                this.todoWrapper.addEventListener(
                    'change',
                    this.statusHandler.bind(this),
                    options
                )
            },
            formHandler(e) {
                e.preventDefault();
                ++this.itemId;
                const inputs = Array.from(
                    e.target.querySelectorAll('input[type=text], textarea')
                ).reduce((accum, item) => {
                    accum[item.name] = item.value;
                    return accum;
                }, {})
                inputs.id = this.itemId;
                this.validate(inputs);
                this.setData(inputs);
                document.getElementById(this.todoContainerId).prepend(this.createTemplate(inputs));
                e.target.reset();
            },
            validate(inputs) {
                if (Object.keys(inputs).length === 0) throw new Error('Data is empty')
                for (const key of Object.entries(inputs)) {
                    if (key[1] === '') throw new Error('Value is empty')
                }
            },
            setData(inputs) {
                inputs.completed = false;
                if (!localStorage.getItem(this.formId)) {
                    localStorage.setItem(this.formId, JSON.stringify([inputs]))
                    return
                }
                const existingData = JSON.parse(localStorage.getItem(this.formId));
                existingData.push(inputs);
                localStorage.setItem(this.formId, JSON.stringify(existingData));
            },
            getData() {
                return JSON.parse(
                    localStorage.getItem(this.formId)
                )
            },
            onloadHandler() {
                const data = this.getData();
                if (data === null) return;

                function* generator(data) {
                    for (const key in data) {
                        yield data[key]
                    }
                }
                const iter = generator(data);

                for (const key of data) {
                    document.getElementById(this.todoContainerId).prepend(this.createTemplate(iter.next().value))
                }

            },
            removeTodo({target}) {
                this.removeTodoItem(
                    target.getAttribute('data-item-id'),
                    this.formId
                )
                target.closest('.taskWrapper').parentElement.remove();
            },
            removeTodoItem(elementId, dbKey) {
                if (!elementId) throw new Error('Wrong element ID');
                const data = JSON.parse(localStorage.getItem(dbKey));
                const currentItemIndex = data.findIndex(todoItem => {
                    return todoItem.id === +elementId
                });
                data.splice(currentItemIndex, 1);
                localStorage.setItem(dbKey, JSON.stringify(data))
            },
            rmAllData() {
                if (localStorage.getItem(this.formId)) {
                    if (confirm('Are you sure to remove all tasks?')) {
                        localStorage.clear();
                        document.getElementById(this.todoContainerId).remove();
                        document.location.reload();
                    }
                }
            },
            statusHandler(e) {
                const {target} = e;
                const data = this.getData()
                const itemId = target.getAttribute('data-id');
                const currentItemIndex = data.findIndex(todoItem => {
                    return todoItem.id === +itemId
                });
                data[currentItemIndex].completed = target.checked;
                localStorage.setItem(this.formId, JSON.stringify(data));
            },
            createTemplate({title, description, id}) {
                //wrappers
                const wrapper = document.createElement('div');
                wrapper.classList.add('col-4');
                const taskWrapper = document.createElement('div');
                taskWrapper.classList.add('taskWrapper');
                //head
                const taskHeading = document.createElement('div');
                taskHeading.classList.add('taskHeading', 'text-center');
                taskHeading.innerHTML = title;
                //description
                const taskDescription = document.createElement('div');
                taskDescription.classList.add('taskDescription', 'text-center');
                taskDescription.innerHTML = description;
                //menu
                const taskMenu = document.createElement('div');
                taskMenu.classList.add('taskMenu');
                const formCheck = document.createElement('div');
                formCheck.classList.add('form-check');
                const formCheckInput = document.createElement('input');
                formCheckInput.classList.add('form-check-input');
                formCheckInput.setAttribute('type', 'checkbox');
                formCheckInput.setAttribute('id', 'form-check-label');
                formCheckInput.setAttribute('value', 'Done');
                formCheckInput.setAttribute('data-id', `${id}`)

                const formCheckLabel = document.createElement('label');
                formCheckLabel.classList.add('form-check-label');
                formCheckLabel.setAttribute('for', 'flexCheckDefault');
                formCheckLabel.innerHTML = 'Done';

                const redCross = document.createElement('input');
                redCross.classList.add('redCross');
                redCross.setAttribute('id', 'clearItem');
                redCross.setAttribute('type', 'button');
                redCross.dataset.itemId = `${id}`

                const hr = document.createElement('hr');
                hr.classList.add('hrNormalize');

                formCheck.append(formCheckInput);
                formCheck.append(formCheckLabel);
                taskWrapper.append(formCheck);
                taskWrapper.append(redCross);
                taskWrapper.append(hr)
                taskWrapper.append(taskHeading);
                taskWrapper.append(taskDescription);
                wrapper.append(taskWrapper);

                return wrapper;
            },

            init() {
                this.findForm();
                this.findToDoWrapper();
                this.setEvents();
            }
        }
    }

    createHandler('todoForm', 'todoItems').init();
})();