class Author < ApplicationRecord
    validates_presence_of :name, :access
    validates_presence_of :passcode, if: :passcode_protected?

    enum :access, [:draft, :published, :passcode_protected]
    
    after_create_commit { broadcast_prepend_to "authors" }
   
end
