class Api::TodosController < ApplicationController

    def index
        @todos = TodoList.where(list_id: params[:todo_list_id])
        render :index
    end

    def show
        @todo = Todo.find(params[:id])
        if @todo
            render :show
        else
            render json: ["Nothing to do"], status: 404
        end
    end

    def create
        @todo = Todo.new(todo_params)
        @todo.list_id = params[:todo_list_id]
        @todo.creator_id = current_user.id
        if @todo.save
            render :show
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def update
        @todo = todo.find(params[:id])
        if @todo.update_attributes(todo_params)
            render :show
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy
        @todo = todo.find(params[:id])
        if @todo && @todo.destroy
            render :index
        else
            render json: ["Can't delete the todo"], status: 403
        end
    end

    private

    def todo_params
        params.require(:todo).permit(:title, :list_id, :creator_id, :owner_id, :subscriber_id, :due_date, :note)
    end
end
