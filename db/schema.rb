# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_12_000719) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.integer "scope_id", null: false
    t.datetime "start", null: false
    t.datetime "end", null: false
    t.string "repeat", null: false
    t.integer "creator_id", null: false
    t.integer "subscriber_id"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_events_on_name"
    t.index ["scope_id"], name: "index_events_on_scope_id", unique: true
  end

  create_table "messages", force: :cascade do |t|
    t.string "title", null: false
    t.string "body"
    t.integer "scope_id", null: false
    t.integer "creator_id", null: false
    t.integer "subscriber_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["scope_id"], name: "index_messages_on_scope_id", unique: true
  end

  create_table "scopes", force: :cascade do |t|
    t.string "name", null: false
    t.string "category", null: false
    t.integer "subscriber_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
  end

  create_table "todo_lists", force: :cascade do |t|
    t.string "title", null: false
    t.string "body"
    t.integer "creator_id", null: false
    t.date "due_date"
    t.integer "scope_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["scope_id"], name: "index_todo_lists_on_scope_id", unique: true
    t.index ["title"], name: "index_todo_lists_on_title"
  end

  create_table "todos", force: :cascade do |t|
    t.string "title", null: false
    t.integer "list_id", null: false
    t.integer "creator_id", null: false
    t.integer "owner_id"
    t.integer "subscriber_id"
    t.date "due_date"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_todos_on_list_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "title"
    t.string "company"
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
