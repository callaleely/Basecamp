@todolists.each do |todolist|
    json.set! todolist.id do
        json.partial! "api/todo_lists/todolist", todolist: todolist
    end
end