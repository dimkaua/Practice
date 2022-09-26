const tabsList = document.querySelector('.our-service-menu')
const tabsText = document.querySelectorAll('.our-service-desc')

tabsList.addEventListener('click', (event) => {
  const tabsListTarget = event.target

  tabsListTarget
    .closest('ul')
    .querySelector('.items-active')
    .classList.remove('items-active')
  tabsListTarget.classList.add('items-active')

  tabsText.forEach((item) => {
    item.classList.remove('desc-active')
    if (item.id === tabsListTarget.dataset.index) {
      item.classList.add('desc-active')
    }
  })
})

const amazingList = document.querySelector('.amazing-list')
const amazingImage = document.querySelectorAll('.amazing-work-img')
const loadBtn = document.querySelector('.load-btn')

amazingList.addEventListener('click', (event) => {
  const amazingItemTarget = event.target

  amazingItemTarget
    .closest('ul')
    .querySelector('.amazing-active')
    .classList.remove('amazing-active')
  amazingItemTarget.classList.add('amazing-active')
  if (amazingItemTarget.dataset.indexFilter === 'All') {
    amazingImage.forEach((item) => {
      item.classList.remove('amazing-hidden')
      loadBtn.remove()
    })
  } else {
    amazingImage.forEach((item) => {
      item.classList.add('amazing-hidden')
      if (item.dataset.filter === amazingItemTarget.dataset.indexFilter) {
        item.classList.remove('amazing-hidden')
      }
    })
  }
})

loadBtn.addEventListener('click', (event) => {
  amazingImage.forEach((item) => {
    if (item.classList.contains('amazing-hidden')) {
      item.classList.remove('amazing-hidden')
    }
  })

  loadBtn.remove()
})
