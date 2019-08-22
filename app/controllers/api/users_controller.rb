class Api::UsersController < ApplicationController
   def index
        @users = User.all
        render json: :index
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user =User.find_by(id:params[:id])
        render json: :show
    end

    private 
    
    def user_params
        params.require(:user).permit(:email, :password, :name)
    end

end
