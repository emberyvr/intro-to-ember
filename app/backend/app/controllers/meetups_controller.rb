class MeetupsController < ApplicationController

  def index
    render json: Meetup.all
  end

  def show
    render json: Meetup.find(params[:id])
  end

  def update
    render json: Meetup.find(params[:id]).update(allowed_params)
  end

  private

  def allowed_params
    params.require(:data).permit(attributes: [
      :title
    ])
  end

end
