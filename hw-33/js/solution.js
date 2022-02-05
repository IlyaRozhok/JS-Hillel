
'use strict';
(function() {

//1
	const list = {
		listId: 'ulId',
		showElems() {

			const elem = document.getElementById(this.listId);
			if (!elem) throw new Error ('No list!');
			return elem.innerText;
		},
		getAttr() {

			const elem = document.getElementById(this.listId);
			if (!elem) throw new Error ('No list!');
			const atts = Array.from(elem.attributes);
			return atts
			},

		getAttrValue() {

			const elem = document.getElementById(this.listId);
			if (!elem) throw new Error ('No list!');
			const atts = Array.from(elem.attributes);
			const arr = new Array();
			for (let i = 0; i < atts.length; i++) {
				arr.push(atts[i].value);
			}
			return arr;
		},

		editLastElem() {

			const elem = document.getElementById(this.listId);
			if (!elem) throw new Error ('No list!');
			const userName = prompt('Your name?');
			elem.lastElementChild.textContent = `Привет, меня зовут ${userName}!`;
			return elem.lastElementChild.innerHTML;
					},
		addAttrFirstElem() {

			const elem = document.getElementById(this.listId);
			if (!elem) throw new Error ('No list!');
			const userName = prompt('Your name?');
			elem.firstElementChild.setAttribute('data-my-name', `${userName}`);
			return `Attribute has changed to ${userName}`
		},
		rmAttr() {

			const elem = document.getElementById(this.listId);
			if (!elem) throw new Error ('No list!');
			elem.removeAttribute('data-dog-tail');
			if (!elem.hasAttribute('data-dog-tail')) {
				return `Attribute has deleted`;
			}
		},
	};

// 2-3
	const arr = [1, 2, 3, [3.1, 3.2, 3.3], 4, 5, 6, 7];

	const createLi = (item) => {
		const li = document.createElement('li');
		li.innerHTML = item;
		return li;
	};

	const createItemToList = (item) => {
		if (Array.isArray(item)) {
			const ul = document.createElement('ul');
			item.forEach(subItem => {
				const li = createItemToList(subItem);
				ul.appendChild(li);
			});
			return ul;
		}
		const li = createLi(item)
		return li;
	};
	arr.forEach(item => {
		document.body.appendChild(createItemToList(item))
	});

})();


