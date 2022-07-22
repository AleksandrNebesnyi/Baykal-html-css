

const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);


const {formFooter} = document.forms;


function retrieveFormValue(event) {
    event.preventDefault();

    const values = {};

    for (let field of formFooter) {
        const {name} = field;

        if (name) {
            const {type, checked, value} = field;

            values[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    }
    localStorage.setItem('order', JSON.stringify(values));
    console.log('footer-form', values);
}

formFooter.addEventListener('submit', retrieveFormValue);



const {formModal}= document.forms;


function retrieveFormValueModal(event) {
  event.preventDefault();

  const values = {};

  for (let field of formModal) {
      const {name} = field;

      if (name) {
          const {type, checked, value} = field;

          values[name] = isCheckboxOrRadio(type) ? checked : value;
      }
  }
  localStorage.setItem('order', JSON.stringify(values));
  console.log('modal-form', values);
}

formModal.addEventListener('submit',retrieveFormValueModal );


// /* <h1>Retrieve Form Data</h1>

// <form action="/" method="POST" id="form">
//     <div>
//         <label>
//             Name:
//             <input type="text" name="name" value="John Doe">
//         </label>
//     </div>
//     <div>
//         <label>
//             Age:
//             <input type="number" name="age" value="30">
//         </label>
//     </div>

//         <div>
//         <label>
//             Confirm terms of service:
//             <input type="checkbox" name="terms" checked>
//         </label>
//     </div>
//     <div>
//         Plan:
//         <select name="plan">
//             <option value="free" selected>free</option>
//             <option value="simple">simple</option>
//             <option value="pro">pro</option>
//         </select>
//     </div>
//     <div>
//         <button type="submit">Submit</button>
//     </div>
// </form> */

// const form = document.getElementById('form');

// function retrieveFormValue(event) {
//     event.preventDefault();

//     const name = form.querySelector('[name="name"]'),
//         age = form.querySelector('[name="age"]'),
//         terms = form.querySelector('[name="terms"]'),
//         plan = form.querySelector('[name="plan"]');

//     const values = {
//         name: name.value,
//         age: age.value,
//         plan: plan.value,
//         terms: terms.checked
//     };

//     console.log('v1', values);
// }

// form.addEventListener('submit', retrieveFormValue);

// -------------------------------------------------------------------------

// const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

// const form = document.getElementById('form');

// function retrieveFormValue(event) {
//     event.preventDefault();

//     const fields = document.querySelectorAll('input, select, textarea');
//     const values = {};

//     fields.forEach(field => {
//         const {name, value, type, checked} = field;

//         values[name] = isCheckboxOrRadio(type) ? checked : value;
//     });

//     console.log('v2', values);

// }

// form.addEventListener('submit', retrieveFormValue);

// ------------------------------------------------------------------------------

// const {form} = document.forms;

// function retrieveFormValue(event) {
//     event.preventDefault();

//     const {name, age, terms, plan} = form;

//     const values = {
//         name: name.value,
//         age: age.value,
//         terms: terms.checked,
//         plan: plan.value
//     };

//     console.log('v3', values);
// }

// form.addEventListener('submit', retrieveFormValue);

// ---------------------------------------------------------------------------


// const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

// const {form} = document.forms;

// function retrieveFormValue(event) {
//     event.preventDefault();

//     const {elements} = form;
//     const values = {};

//     for (let i = 0; i < elements.length; i++) {
//         const formElement = elements[i];
//         const {name} = formElement;

//         if (name) {
//             const {value, type, checked} = formElement;

//             values[name] = isCheckboxOrRadio(type) ? checked : value;
//         }
//     }

//     console.log('v4', values);
// }

// form.addEventListener('submit', retrieveFormValue);

// ----------------------------------------------------------------------


// const {form} = document.forms;

// function retrieveFormValue(event) {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const values = Object.fromEntries(formData.entries());

//     console.log('v5', values);
// }

// form.addEventListener('submit', retrieveFormValue);