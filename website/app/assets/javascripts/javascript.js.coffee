$ ->
  fetch_from_server = ->
    $.ajax(
      url:'https://api.github.com/'
      headers:
        'X-Force-Cors': 'force CORS preflight check'
    ).then (data) ->
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
