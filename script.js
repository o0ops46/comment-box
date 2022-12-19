'use strict';
const textarea = document.getElementById('getComment');
const countCharacters = document.querySelector('.countCharacters');
const countErorr = document.querySelector('.countError');
const submit = document.querySelector('.submit');
const commentsBox = document.querySelector('.commentsBox');
const form = document.querySelector('form');
textarea.addEventListener('keydown', countChars);
const allComments = [];
function countChars() {
  //get the text length
  let textareaLength = textarea.value.length + 1;
  //print the length to the html
  countCharacters.innerText = `${textareaLength}/140`;
}
let input = document.querySelectorAll('input');
const getFormData = e => {
  commentsBox.classList.remove('hidden');
  e.preventDefault();
  let userCom = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    comment: document.getElementById('getComment').value,
  };
  allComments.push(userCom);
  let commentP = document.createElement('p');
  allComments.forEach(user => {
    commentP.innerText = `Name:${userCom.name} Email: ${userCom.email} Comment: ${userCom.comment}`;
    commentsBox.appendChild(commentP);
  });
  document.querySelector('form').reset();
  // or document.forms[0].reset()
};

document.addEventListener('DOMContentLoaded', () => {
  submit.addEventListener('click', getFormData);
});
