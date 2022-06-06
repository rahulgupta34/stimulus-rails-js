class Cocktail < ApplicationRecord
    include PgSearch::Model

    pg_search_scope :global_search,
        against: [:name, :glass],
        using: {
        tsearch: { prefix: true }
    }
end
