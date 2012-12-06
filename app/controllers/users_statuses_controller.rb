class UsersStatusesController < ApplicationController
  # GET /users_statuses
  # GET /users_statuses.json
  def index
    @users_statuses = UsersStatus.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users_statuses }
    end
  end

  # GET /users_statuses/1
  # GET /users_statuses/1.json
  def show
    @users_status = UsersStatus.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @users_status }
    end
  end

  # GET /users_statuses/new
  # GET /users_statuses/new.json
  def new
    @users_status = UsersStatus.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @users_status }
    end
  end

  # GET /users_statuses/1/edit
  def edit
    @users_status = UsersStatus.find(params[:id])
  end

  # POST /users_statuses
  # POST /users_statuses.json
  def create
    @users_status = UsersStatus.new(params[:users_status])

    respond_to do |format|
      if @users_status.save
        format.html { redirect_to @users_status, notice: 'Users status was successfully created.' }
        format.json { render json: @users_status, status: :created, location: @users_status }
      else
        format.html { render action: "new" }
        format.json { render json: @users_status.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /users_statuses/1
  # PUT /users_statuses/1.json
  def update
    @users_status = UsersStatus.find(params[:id])

    respond_to do |format|
      if @users_status.update_attributes(params[:users_status])
        format.html { redirect_to @users_status, notice: 'Users status was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @users_status.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users_statuses/1
  # DELETE /users_statuses/1.json
  def destroy
    @users_status = UsersStatus.find(params[:id])
    @users_status.destroy

    respond_to do |format|
      format.html { redirect_to users_statuses_url }
      format.json { head :no_content }
    end
  end
end
