require 'test_helper'

class SegaControllerTest < ActionController::TestCase
  test "should get session" do
    get :session
    assert_response :success
  end

end
