describe 'Test spec' do
  
 string = "RubyDev"
string.should have(7).characters
string.should_not have(5).characters

end