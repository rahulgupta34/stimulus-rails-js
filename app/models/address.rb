class Address < ApplicationRecord
    validates :country, :state, presence: true
end
