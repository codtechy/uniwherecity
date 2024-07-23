// ===== Bottom to Top ===============
let bottomToTop = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }

    })
})

const allBottomToTop = document.querySelectorAll('.bottomToTop')

allBottomToTop.forEach((el) => bottomToTop.observe(el))

