# Тестування працездатності системи

Тестування сервісу проводилося за допомогою додатку Postman.

## Запуск сервера

<img src="./media/start.png" alt="server successfully started">

## POST api/user

<img src="./media/post-user.png" alt="user successfully created">

## GET api/user

<img src="./media/get-users.png" alt="successfully returned a list of users">

## GET api/user/:id

<img src="./media/get-user.png" alt="successfully returned a user based on id">

## PATCH api/user/:id

<img src="./media/patch-user.png" alt="successfully updated user's info">

## DELETE api/user/:id

<img src="./media/delete-user.png" alt="successfully deleted a user">

## POST api/content

<img src="./media/post-content.png" alt="successfully created content">

## GET api/content

<img src="./media/get-contents.png" alt="successfully returned a list of contents">

## GET api/content/:id

<img src="./media/get-content.png" alt="successfully returned a content based on id">

## PATCH api/content/:id

<img src="./media/patch-content.png" alt="successfully updated content's info">

## DELETE api/content/:id

<img src="./media/delete-content.png" alt="successfully deleted a content">

## POST api/analysisResult

<img src="./media/post-analysisResult.png" alt="successfully created Analysis Result">

## DELETE api/content/:id

<img src="./media/delete-analysisResult.png" alt="successfully deleted an Analysis Result">

## EXCEPTION(User): DataMissingException

<img src="./media/user-DataMissingException.png" alt="DataMissingException returned from a bad request">

## EXCEPTION(User): AlreadyRegisteredException

<img src="./media/user-AlreadyRegisteredException.png" alt="AlreadyRegisteredException returned from a repeated data">

## EXCEPTION(User): UserNotFoundException

<img src="./media/user-UserNotFoundException.png" alt="UserNotFoundException returned from wrong ID provided">

## EXCEPTION(MediaContent): RequiredFieldsMissingException

<img src="./media/content-RequiredFieldsMissingException.png" alt="RequiredFieldsMissingException returned from not providing enough required fields">

## EXCEPTION(MediaContent): MediaContentNotFoundException

<img src="./media/content-MediaContentNotFoundException.png" alt="MediaContentNotFoundException returned from wrong ID provided">