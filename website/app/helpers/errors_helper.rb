module ErrorsHelper
  def show_errors_for(model)
    render partial: 'form_errors', locals: { model: model }
  end
end
