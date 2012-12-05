class WorkDaysController < ApplicationController
  # GET /work_days
  # GET /work_days.json
  def index
    @work_days = WorkDay.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @work_days }
    end
  end

  # GET /work_days/1
  # GET /work_days/1.json
  def show
    @work_day = WorkDay.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @work_day }
    end
  end

  # GET /work_days/new
  # GET /work_days/new.json
  def new
    @work_day = WorkDay.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @work_day }
    end
  end

  # GET /work_days/1/edit
  def edit
    @work_day = WorkDay.find(params[:id])
  end

  # POST /work_days
  # POST /work_days.json
  def create
    @work_day = WorkDay.new(params[:work_day])

    respond_to do |format|
      if @work_day.save
        format.html { redirect_to @work_day, notice: 'Work day was successfully created.' }
        format.json { render json: @work_day, status: :created, location: @work_day }
      else
        format.html { render action: "new" }
        format.json { render json: @work_day.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /work_days/1
  # PUT /work_days/1.json
  def update
    @work_day = WorkDay.find(params[:id])

    respond_to do |format|
      if @work_day.update_attributes(params[:work_day])
        format.html { redirect_to @work_day, notice: 'Work day was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @work_day.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /work_days/1
  # DELETE /work_days/1.json
  def destroy
    @work_day = WorkDay.find(params[:id])
    @work_day.destroy

    respond_to do |format|
      format.html { redirect_to work_days_url }
      format.json { head :no_content }
    end
  end
end
