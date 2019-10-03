$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    // do something...
  })

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })