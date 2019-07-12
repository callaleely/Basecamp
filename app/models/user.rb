# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  title           :string
#  company         :string
#  session_token   :string           not null
#  password_digest :string           not null
#  status          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :todolists,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: `TodoList`

  has_many :created_todos,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: 'Todo'

  has_many :todos,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: 'Todo'

  has_many :subscribing_todos,
  primary_key: :id,
  foreign_key: :subscriber_id,
  class_name: 'Todo'

  has_many :messages,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: 'Message'

  has_many :subscribing_messages,
  primary_key: :id,
  foreign_key: :subscriber_id,
  class_name: 'Message'

  has_many :events,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: 'Event'

  has_many :scopes,
  primary_key: :id,
  foreign_key: :subscriber_id,
  class_name: 'Scope'

  has_many :subscribing_events,
  primary_key: :id,
  foreign_key: :subscriber_id,
  class_name: 'Event'

  attr_reader :password

  after_initialize :ensure_session_token
  
  def self.find_by_credential(email, password)
    @user = User.find_by(email: email)
    @user && @user.is_password?(password) ? @user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
end
