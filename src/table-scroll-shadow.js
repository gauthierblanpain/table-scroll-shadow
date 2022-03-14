;(function () {
  // Define the constructor
  this.TableScrollShadow = function () {
    // Define option defaults
    let defaults = {
      wrapperClass: '.table-wrapper',
      scrollAreaClass: '.table-scroll',
      throttleDelay: 75
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === 'object') {
      this.options = extendDefaults(defaults, arguments[0])
    } else {
      this.options = defaults
    }
  }

  // Public init method
  TableScrollShadow.prototype.init = function () {
    const tables = document.querySelectorAll(this.options.wrapperClass)

    // Handling of overflow and shadows
    const checkForOverflow = new ResizeObserver(
      throttle((entries) => {
        for (let entry of entries) {
          const tableWrapper = entry.target
          const scrollArea = tableWrapper.querySelector(this.options.scrollAreaClass)
          const table = tableWrapper.querySelector('table')
          let tableHasOverflow = false

          // Override color css variable
          if (this.options.shadowColor) {
            tableWrapper.style.setProperty('--table-shadow-color', this.options.shadowColor)
          }

          // Override size css variable
          if (this.options.shadowSize) {
            tableWrapper.style.setProperty('--table-shadow-size', this.options.shadowSize)
          }

          if (table.clientWidth > scrollArea.clientWidth) {
            // Handle overflow
            tableHasOverflow = true
            tableWrapper.classList.add('has-overflow')
          } else {
            tableHasOverflow = false
            tableWrapper.classList.remove('has-overflow', 'has-shadow-left', 'has-shadow-right')
          }

          // Add horizontal shadows
          if (tableHasOverflow) {
            tableWrapper.classList.add('has-shadow-right')

            scrollArea.addEventListener('scroll', () => {
              let scrollSize = table.clientWidth - scrollArea.clientWidth

              if (scrollArea.scrollLeft === 0) {
                tableWrapper.classList.add('has-shadow-right')
                tableWrapper.classList.remove('has-shadow-left')
              } else if (scrollArea.scrollLeft > 0 && scrollArea.scrollLeft !== scrollSize) {
                tableWrapper.classList.add('has-shadow-right', 'has-shadow-left')
              } else if (scrollArea.scrollLeft === scrollSize) {
                tableWrapper.classList.remove('has-shadow-right')
                tableWrapper.classList.add('has-shadow-left')
              }
            })
          }
        }
      }, this.options.throttleDelay)
    )

    // Observe the tables present on the page
    tables.forEach((table) => {
      checkForOverflow.observe(table)
    })
  }

  // Utility method to extend defaults with options
  const extendDefaults = (source, properties) => {
    let property
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property]
      }
    }
    return source
  }

  // Utility to throttle callbacks
  const throttle = (callback, delay) => {
    let timer = 0
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => callback.apply(this, args), delay)
    }
  }
})()
