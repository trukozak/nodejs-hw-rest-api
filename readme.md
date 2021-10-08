# by Alex

## GoIT Node.js Course Template Homework

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими исправлениями простых ошибок

## CONTACTS REQUEST

### Get contacts

```
GET /api/contacts

Authorization: "Bearer {{token}}"
```

### Get contact by id

```
GET /api/contacts/:contactId

Authorization: "Bearer {{token}}"
```

### Add contact

```
POST /api/contacts

Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
  "name": "exampleName",
  "email": "example@example.com",
  "phone": "11111111"
  "favorite": {{Boolean}}
}
```

### Update contact information

```
PUT /api/contacts:contactId

Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
  "name": "exampleName",
  "email": "example@example.com",
  "phone": "11111111"
  "favorite": {{Boolean}}
}
```

### Update contact favorite status

```
PATCH /api/contacts/:contactId/favorite

Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
  "favorite": {{Boolean}}
}
```

### Delete contact

```
DELETE /api/contacts/:contactId

Authorization: "Bearer {{token}}"
```

## AUTHORIZATION REQUEST

### Registration request

```
POST /api/users/signup

Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

### Login request (User`s email should be verify)

```
POST /api/users/signin

Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

### Logout request

```
POST /api/users/signout

Authorization: "Bearer {{token}}"
```

### Current user request

```
GET api/users/current

Authorization: "Bearer {{token}}"
```

### Update user`s avatar

```
PATCH /api/users/avatars

Content-Type: multipart/form-data
Authorization: "Bearer {{token}}"
RequestBody: {
  "avatar": file
}
```

### Verification of user`s email

```
GET /api/users/verify/:verifyToken
```

### Resend email verification token

```
POST /api/users/verify

Content-Type: application/json
RequestBody: {
  "email": "example@example.com"
}
```
