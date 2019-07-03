class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader: :password

  after_initialize: :ensure_session_token
  
  def self.find_by_credential(email, password)
    @user = User.find_by(email: email)
    if @user
      @user.login
      redirect_to :new
    else
      render json: @user.errors.full_messages
    end 
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    session[:session_token]
  end

  def ensure_session_token
  end
end
