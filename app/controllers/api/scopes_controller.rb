class Api::ScopesController < ApplicationController
    
    def index
        @scopes = Scope.find_by(subscriber_id: current_user.id)
        render :index 
    end

    def show
        @scope = Scope.find(param[:id])
        if @scope
            render: show
        else
            render json: ["No data found"], status: 404
        end
    end

    def create
        @scope = Scope.new(scope_params)
        @scope.subscriber_id = current_user.index

        if @scope.save
            render :show
        else
            render json: @scope.errors.full_messages, status: 422
        end
    end

    def update
        @scope = current_user.scopes.find(params[:id])
        if @scope.update_attributs(scope_params)
            render :show
        else
            render json: @scope.errors.full_messages, status: 422
        end
    end

    def destroy
        @scope = current_user.scopes.find(params[:id])
        if @scope.destroy
            render :show
        else 
            render json: ["Wrong access"], status: 404
        end
    end

    private

    def scope_params
        params.require(:scope).permit(:name, :type, :subscriber_id)
    end
end
