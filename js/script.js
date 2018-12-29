/*----------modal-write-us, modal-map------------------------------*/

var linkWriteUs = document.querySelector(".button-write-us");
var modalWriteUs = document.querySelector(".modal-write-us");
var writeUsClose = modalWriteUs.querySelector(".modal-close");

var userName = modalWriteUs.querySelector("[name=name]");
var userEmail = modalWriteUs.querySelector("[name=email]");
var formWriteUs = modalWriteUs.querySelector(".form-write-us");

var mapContacts = document.querySelector(".map-contacts");
var modalMap = document.querySelector(".modal-map");
var mapClose = modalMap.querySelector(".modal-close");

var isStorageSupport = true;
var userStorage = "";

/*----------Убеждаемся, что localStorage существует----------*/

try {
	userStorage = localStorage.getItem("userName");
} catch(err) {
	isStorageSupport = false;
}

/*----------Добавление класса, что бы появился popup----------*/

linkWriteUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalWriteUs.classList.add("modal-show");
	if (userStorage) {
		userName.value = userStorage;
		userEmail.focus();
	} else {
		userName.focus();
	}
});

mapContacts.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
});

/*----------Удаление класса, что бы закрылся popup----------*/

writeUsClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalWriteUs.classList.remove("modal-show");
	modalWriteUs.classList.remove("modal-error");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.remove("modal-show");
});

/*----------Проверка на пустые поля----------*/

formWriteUs.addEventListener("submit", function (evt) {
	if (!userName.value || !userEmail.value) {
		evt.preventDefault();
		modalWriteUs.classList.remove("modal-error");
		modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
		modalWriteUs.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
		}
	}
});

/*----------Закрытие poput по нажатию на Escape----------*/

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modalWriteUs.classList.contains("modal-show")) {
			evt.preventDefault();
			modalWriteUs.classList.remove("modal-show");
			modalWriteUs.classList.remove("modal-error");
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modalMap.classList.contains("modal-show")) {
			evt.preventDefault();
			modalMap.classList.remove("modal-show");
		}
	}
});
