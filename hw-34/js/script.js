const form = document.getElementById('form');

form.addEventListener(
    'submit',
     event => {
    event.preventDefault();

    const data = Array.from(event.target.querySelectorAll('input, select, textarea')
    )
    .reduce((accum, item) => {
        accum[item.name] = item.value;
        return accum;
    });
    localStorage.setItem('formData', JSON.stringify(data)
    );
});
