# Lab 5 - Starter

Link to web page corresponding to expose.html: https://arnav710.github.io/Lab5_Starter/expose.html
Link to web page corresponding to explore.html: https://arnav710.github.io/Lab5_Starter/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use unit testing to test the "message" feature that allows you to send a message to another user. This component interacts with other devices and is not independent enough to test separately. I would rather use actual devices - deliver message from one to the other and see if it matches the expected behavior. We can probably unit test certain aspects of this process though such as the expected return value of the function that sends the message like the message body, status codes, etc.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

We can use unit testing to test the "max message length" feature. We can look at input of varying lengths, come up with expected outputs, and see that the match the actual output. We should consider lengths of 0, less than 80, equal to 80, and more than 80.


I worked on this lab with alone.