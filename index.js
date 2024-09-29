const itemInput = document.getElementById('item-input')
const form = document.querySelector('form')

const list = document.querySelector('ul')

function createListElement(itemName) {
  const createListItem = document.createElement('li')

  const checkboxImage = document.createElement('div')
  const labelName = document.createElement('div')
  const trashImage = document.createElement('button')
  const checkboxInput = document.createElement('input')

  checkboxImage.className = 'checkbox-image'

  labelName.id = 'item-name'
  labelName.textContent = itemName

  trashImage.className = 'trash-icon delete-btn'
  trashImage.type = 'button'

  checkboxInput.type = 'checkbox'
  checkboxInput.id = 'checkbox-input'

  list.prepend(createListItem)

  createListItem.append(checkboxInput)
  createListItem.append(checkboxImage)
  createListItem.append(labelName)
  createListItem.append(trashImage)

  trashImage.addEventListener('click', (e) => {
    const listItem = e.target.closest('li')
    if (listItem) {
      listItem.remove()
    }
  })

  itemInput.value = ''
}

const trashButton = document.querySelectorAll('.delete-btn')
const warning = document.getElementById('warn')
const closeWarning = document.getElementById('close')

for (let i = 0; i < trashButton.length; i++) {
  trashButton[i].addEventListener('click', (e) => {
    const listItem = e.target.closest('li')
    if (listItem) {
      listItem.remove()
      warning.style.display = 'flex'
    }
  })
}

closeWarning.addEventListener('click', () => (warning.style.display = 'none'))

form.addEventListener('submit', (e) => {
  e.preventDefault()

  itemInput.value === ''
    ? alert('Por favor, insira um nome antes de enviar.')
    : createListElement(itemInput.value)
})
