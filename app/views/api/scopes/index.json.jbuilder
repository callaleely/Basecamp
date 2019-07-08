@scopes.each do |scope|
    json.set! scope.id do
        json.partial! `/api/scopes/scope`, scope: scope
    end
end