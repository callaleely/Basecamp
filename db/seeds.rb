# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create!({email: 'demouser@basecamp.com',
password: 'password', name: 'demo'})


user_id = User.all[0].id
Scope.destroy_all

Scope.create({
    name: 'Developer Club',
    category: 'company',
    description: 'Company-wide announcements and stuff everyone needs to know.',
    subscriber_id: user_id
})

Scope.create({
    name: 'R&D',
    category: 'team',
    description: 'An example of how a customer support team might use basecamp.',
    subscriber_id: user_id
})

Scope.create({
    name: 'Customer Service',
    category: 'team',
    description: 'Customer retention is the SF',
    subscriber_id: user_id
})

Scope.create({
    name: 'Full Stack Project',
    category: 'project',
    description: 'An example of using Basecamp to produce a podcase.',
    subscriber_id: user_id
})

# Event.destroy_all

# Event.create({
#     name: 
#     scope_id:
#     start:
#     end:
#     repeat:
#     creator_id:
#     subscriber_id:
#     note:
# })

# Event.create({
#     name:
#     scope_id:
#     start:
#     end:
#     repeat:
#     creator_id:
#     subscriber_id:
#     note:
# })

# Event.create({
#     name:
#     scope_id:
#     start:
#     end:
#     repeat:
#     creator_id:
#     subscriber_id:
#     note:
# })

# Event.create({
#     name:
#     scope_id:
#     start:
#     end:
#     repeat:
#     creator_id:
#     subscriber_id:
#     note:
# })

# Event.create({
#     name:
#     scope_id:
#     start:
#     end:
#     repeat:
#     creator_id:
#     subscriber_id:
#     note:
# })

