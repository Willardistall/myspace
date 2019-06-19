100.times do
  name = Faker::FunnyName.two_word_name
  age = Faker::Number.non_zero_digit
  gender = Faker::Gender.type
  location = Faker::Address.state
  avatar = Faker::Avatar.image
  Friend.create(name: name, age: age, gender: gender, location: location, avatar: avatar )
end

puts "100 friends added"