require 'test_helper'

class UsersStatusesControllerTest < ActionController::TestCase
  setup do
    @users_status = users_statuses(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:users_statuses)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create users_status" do
    assert_difference('UsersStatus.count') do
      post :create, users_status: { name: @users_status.name }
    end

    assert_redirected_to users_status_path(assigns(:users_status))
  end

  test "should show users_status" do
    get :show, id: @users_status
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @users_status
    assert_response :success
  end

  test "should update users_status" do
    put :update, id: @users_status, users_status: { name: @users_status.name }
    assert_redirected_to users_status_path(assigns(:users_status))
  end

  test "should destroy users_status" do
    assert_difference('UsersStatus.count', -1) do
      delete :destroy, id: @users_status
    end

    assert_redirected_to users_statuses_path
  end
end
