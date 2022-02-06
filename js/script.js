const callButton = document.querySelector('.footer_botton')
const popupWrapper = document.querySelector('.popup-container')

callButton.addEventListener('click', function () {
	popupWrapper.classList.add('popup-container-shown')
})
const popupCloseIcon = document.querySelector('.close-btn')

popupCloseIcon.addEventListener('click', function () {
	popupWrapper.classList.remove('popup-container-shown')
})


const countButton = document.querySelector('.body_botton')
const popupWrapperBody = document.querySelector('.popup-container2')

countButton.addEventListener('click', function () {
	popupWrapperBody.classList.add('popup-container2-shown')
})

const countButtonClose = document.querySelector('.close-btn-main')

countButtonClose.addEventListener('click', function () {
	popupWrapperBody.classList.remove('popup-container2-shown')
})

const orderButton = document.querySelector('.popup_button2')
const popupWrapperOrder = document.querySelector('.popup-container-order')

orderButton.addEventListener('click', function () {
	popupWrapperBody.classList.remove('popup-container2-shown')
	popupWrapperOrder.classList.add('popup-container-order-shown')
})
const orderButtonClose = document.querySelector('.close-btn-order')

orderButtonClose.addEventListener('click', function () {
	popupWrapperOrder.classList.remove('popup-container-order-shown')
})

const thankButton = document.querySelector('.popup_button-order')
const popupWrapperThank = document.querySelector('.popup-container-thank')

thankButton.addEventListener('click', function () {
	popupWrapperOrder.classList.remove('popup-container-order-shown')
	popupWrapperThank.classList.add('popup-container-thank-shown')
})
const thankButtonClose = document.querySelector('.close-btn-thank')

thankButtonClose.addEventListener('click', function () {
	popupWrapperThank.classList.remove('popup-container-thank-shown')
})


/*
function DropDown(el) {
this.dd = el;
this.placeholder = this.dd.children('span');
this.opts = this.dd.find('ul.dropdown > li');
this.val = '';
this.index = -1;
this.initEvents();
}
DropDown.prototype = {
initEvents : function() {
var obj = this;
 
obj.dd.on('click', function(event){
$(this).toggleClass('active');
return false;
});
 
obj.opts.on('click',function(){
var opt = $(this);
obj.val = opt.text();
obj.index = opt.index();
obj.placeholder.text('Gender: ' + obj.val);
});
},
getValue : function() {
return this.val;
},
getIndex : function() {
return this.index;
}
}*/
