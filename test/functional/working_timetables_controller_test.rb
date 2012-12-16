require 'test_helper'

class WorkingTimetablesControllerTest < ActionController::TestCase
  setup do
    @working_timetable = working_timetables(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:working_timetables)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create working_timetable" do
    assert_difference('WorkingTimetable.count') do
      post :create, working_timetable: { doctor_id: @working_timetable.doctor_id, workingTimeHash: @working_timetable.workingTimeHash }
    end

    assert_redirected_to working_timetable_path(assigns(:working_timetable))
  end

  test "should show working_timetable" do
    get :show, id: @working_timetable
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @working_timetable
    assert_response :success
  end

  test "should update working_timetable" do
    put :update, id: @working_timetable, working_timetable: { doctor_id: @working_timetable.doctor_id, workingTimeHash: @working_timetable.workingTimeHash }
    assert_redirected_to working_timetable_path(assigns(:working_timetable))
  end

  test "should destroy working_timetable" do
    assert_difference('WorkingTimetable.count', -1) do
      delete :destroy, id: @working_timetable
    end

    assert_redirected_to working_timetables_path
  end
end
