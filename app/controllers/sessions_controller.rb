class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
	  render json: user
    else
	  answer = User.new
	  answer.id = nil
	  render json: answer
    end
  end
  
  def destroy
    session[:user_id] = nil
	answer = User.new
	answer.id = nil
	render json: answer
  end
end
