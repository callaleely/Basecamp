class Api::EventsController < ApplicationController

    def index
        @events = Event.where(scope_id: params[:scope_id])
        render :index
    end

    def show
        @event = Event.find(parmas[:id])
        if @event
            render :show
        else
            render json: ["No Event Found"], status: 404
        end
    end

    def create
        @event = Event.new(event_params)
        @event.creator_id = current_user.id
        @event.subscriber_id = current_user.id
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find(params[:id])
        if @event.update_attributes(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event && @event.destroy
            render :show
        else
            render json: ["Cannot cancel the event"], status: 403
        end 
    end

    private

    def event_params
        params.require(:event).permit(:title, :scope_id, :start, :end, :allDay?, :resource?, :subscriber_id)
    end

end
