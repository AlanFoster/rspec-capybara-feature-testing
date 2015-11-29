$ ->
  fake_server_response = ->
    $('#server-loading').hide()
    $('#server-response').show()
    $('#server-trigger').show()

  $('#server-trigger').click ->
    $('#server-loading').show()
    $('#server-response').hide()
    $(this).hide()

    setTimeout fake_server_response, 2000
