class Api::MessagesController < ApplicationController

    def index
        @messages = Message.where(scope_id: params[:scope_id])
        render :index
    end

    def show
        @message = Message.find(params[:id])
        if @message 
            render :show
        else
            render json: ["Can't find the message"], status: 404
        end
    end

    def create
        @message = Message.new(message_params)
        @message.creator_id = current_user.id
        if @message.save
            render :show 
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @message = Message.find(params[:id])
        if @message.update_attributes(message_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find(params[:id])
        if @message && @message.destroy
            render :show
        else 
            render json: ["Cannot erase this message"], status: 403
        end
    end

    private

    def message_params
        params.require(:message).permit(:title, :body, :subscriber_id, :scope_id)
    end

end
