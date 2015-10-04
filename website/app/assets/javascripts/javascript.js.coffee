$ ->
  fake_server_response = ->
    $('#server-loading').hide()
    $('#server-response').show()

  $('#server-trigger').click ->
    $('#server-loading').show()
    $('#server-response').hide()

    setTimeout fake_server_response, 2000
