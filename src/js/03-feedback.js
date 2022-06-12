const refs = {
	form: document.querySelector('.feedback-form'),
	email: document.querySelector('.feedback-form input'),
	message: document.querySelector('.feedback-form textarea'),
	btn: document.querySelector('.feedback-form button')
}

let formData = {
	email: "",
	message: ""
}

const localFormData = JSON.parse(localStorage.getItem("feedback-form-state"));

if(localFormData !== null) {
	formData = localFormData
	refs.email.value = localFormData.email
	refs.message.value = localFormData.message
}

refs.form.addEventListener('input', onInputChange)
refs.form.addEventListener('submit', onBtnSubmit)

function onInputChange(e) {
	formData.email = e.currentTarget.elements.email.value
	formData.message = e.currentTarget.elements.message.value
	localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function onBtnSubmit(e) {
	e.preventDefault();
	e.currentTarget.reset();
	console.log(formData)
}