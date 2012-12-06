class WorkingTimetablesController < ApplicationController
  # GET /working_timetables
  # GET /working_timetables.json
  def index
    @working_timetables = WorkingTimetable.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @working_timetables }
    end
  end

  # GET /working_timetables/1
  # GET /working_timetables/1.json
  def show
    @working_timetable = WorkingTimetable.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @working_timetable }
    end
  end

  # GET /working_timetables/new
  # GET /working_timetables/new.json
  def new
    @working_timetable = WorkingTimetable.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @working_timetable }
    end
  end

  # GET /working_timetables/1/edit
  def edit
    @working_timetable = WorkingTimetable.find(params[:id])
  end

  # POST /working_timetables
  # POST /working_timetables.json
  def create
    @working_timetable = WorkingTimetable.new(params[:working_timetable])

    respond_to do |format|
      if @working_timetable.save
        format.html { redirect_to @working_timetable, notice: 'Working timetable was successfully created.' }
        format.json { render json: @working_timetable, status: :created, location: @working_timetable }
      else
        format.html { render action: "new" }
        format.json { render json: @working_timetable.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /working_timetables/1
  # PUT /working_timetables/1.json
  def update
    @working_timetable = WorkingTimetable.find(params[:id])

    respond_to do |format|
      if @working_timetable.update_attributes(params[:working_timetable])
        format.html { redirect_to @working_timetable, notice: 'Working timetable was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @working_timetable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /working_timetables/1
  # DELETE /working_timetables/1.json
  def destroy
    @working_timetable = WorkingTimetable.find(params[:id])
    @working_timetable.destroy

    respond_to do |format|
      format.html { redirect_to working_timetables_url }
      format.json { head :no_content }
    end
  end
end
