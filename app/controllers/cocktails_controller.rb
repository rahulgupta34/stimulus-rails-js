class CocktailsController < ApplicationController
  def index
    @target = params[:target]
    if params[:query].present?
      @cocktails = Cocktail.global_search(params[:query])
      respond_to do |format|
        format.turbo_stream
      end
    else
      @cocktails = Cocktail.all
        
    end
  end

  def get_data
    @target = params[:target]
    @cocktails = Cocktail.all
  end
end
