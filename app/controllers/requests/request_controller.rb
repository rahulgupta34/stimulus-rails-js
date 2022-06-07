class Requests::RequestController < ApplicationController
  def index
    @requests = RequestJ.all.order(id: :desc)
    @request = RequestJ.new
  end

  def create
    if params[:name].present? && params[:age].present?
      @request = RequestJ.new(name: params[:name], age: params[:age])
      respond_to do |format|
        if @request.save
          format.turbo_stream
        else
            render :new
        end
      end
    else
      flash[:alert] = "All Fields Are Required."
      render :new
    end
  end
end
