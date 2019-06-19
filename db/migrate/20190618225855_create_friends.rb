class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :age
      t.string :gender
      t.string :location
      t.string :avatar

      t.timestamps
    end
  end
end
