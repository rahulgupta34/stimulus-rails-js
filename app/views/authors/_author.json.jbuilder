json.extract! author, :id, :name, :access, :passcode, :created_at, :updated_at
json.url author_url(author, format: :json)
