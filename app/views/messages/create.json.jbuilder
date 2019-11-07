json.content @message.content
json.image @message.image.url
json.user_id @message.user.id
json.date @message.created_at.strftime("%Y年%m月%d日(%A) %H時%M分")
json.user_name @message.user.name
json.id @message.id