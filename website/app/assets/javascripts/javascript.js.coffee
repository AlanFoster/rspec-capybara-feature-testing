$ ->
  fetch_from_server = ->
    $.get 'https://api.github.com/', (data) ->
      payload = JSON.stringify(data, null, 4)

      $('#server-loading').hide()
      $('#server-response').text(payload).show()
      $('#server-trigger').show()


  $('#server-trigger').click ->
    $('#server-loading').show()
    $('#server-response').hide()
    $(this).hide()

    setTimeout fetch_from_server, 500
