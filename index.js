const itemInput = document.getElementById('item-input')
const form = document.querySelector('form')

const list = document.querySelector('ul')

function createListElement(itemName) {
  const createListItem = document.createElement('li')

  const checkboxImage = document.createElement('div')
  const labelName = document.createElement('div')
  const trashImage = document.createElement('div')
  const checkboxInput = document.createElement('input')

  checkboxImage.className = 'checkbox-image'

  labelName.id = 'item-name'
  labelName.textContent = itemName

  trashImage.id = 'trash-icon'

  checkboxInput.type = 'checkbox'
  checkboxInput.id = 'checkbox-input'

  list.prepend(createListItem)

  createListItem.append(checkboxImage)
  createListItem.append(labelName)
  createListItem.append(trashImage)
  createListItem.append(checkboxInput)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  createListElement(itemInput.value)
})
