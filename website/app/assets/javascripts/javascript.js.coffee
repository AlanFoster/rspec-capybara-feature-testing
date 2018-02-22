$ ->
  fetch_from_server = ->
    $.get 'https://api.github.com/', (data) ->
      payload = JSON.stringify(data, null, 4)
      $('#server-response').text(payload)

      $('#server-loading').hide()
      $('#server-response-wrapper').show()
      $('#server-trigger').show()

  $('#server-trigger').click ->
    $('#server-loading').show()
    $('#server-response-wrapper').hide()
    $(this).hide()

    setTimeout fetch_from_server, 500
