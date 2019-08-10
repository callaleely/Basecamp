class Api::TodoListsController < ApplicationController

    def index
        @todolists = TodoList.where(scope_id: params[:scope_id])
        if @todolists
            render :index
        else
            render json: ["No data found"], status: 404
        end
    end

    def show
        @todolist = TodoList.find(params[:id])
        if @todolist
            render :show
        else
            render json: ["Nothing to do"], status: 404
        end
    end

    def create
        @todolist = TodoList.new(todolist_params)
        @todolist.scope_id = params[:scope_id]
        @todolist.creator_id = current_user.id
        if @todolist.save
            render :show
        else
            render json: @todolist.errors.full_messages, status: 422
        end
    end

    def update
        @todolist = TodoList.find(params[:id])
        if @todolist.update_attributes(todolist_params)
            render :show
        else
            render json: @todolist.errors.full_messages, status: 422
        end
    end

    def destroy
        @todolist = TodoList.find(params[:id])
        if @todolist && @todolist.destroy
            render :show
        else
            render json: ["Can't delete the todo"], status: 403
        end
    end

    private

    def todolist_params
        params.require(:todoList).permit(:title, :body, :creator_id, :due_date, :scope_id)
    end
    
end
