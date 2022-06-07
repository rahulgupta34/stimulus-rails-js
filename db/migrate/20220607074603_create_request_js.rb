class CreateRequestJs < ActiveRecord::Migration[7.0]
  def change
    create_table :request_js do |t|
      t.string :name
      t.integer :age

      t.timestamps
    end
  end
end
