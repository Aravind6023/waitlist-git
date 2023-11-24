SaaS Application Development Test
#To DO  Waitlist application
Overview
Please create an application that helps potential customers to sign up to a 
waiting list of a new iPhone product.
Functionality Required in the Application:
- The app allows a potential customer to sign up to the waiting list 
with his email address. (he will see a screen with an email address)
- As soon as he signs up, his position in the waiting list will be 
displayed. (The first customer gets the default number of 99. When 
the next customer signs up, his waiting list position is 100)
- Once he signed up for the waiting list, he will get a unique referral link
- He can share this link to his friends.
- If their friends sign up using his referral link, he will “move up” by 1 
place in his position (Example: John has joined the wait list at position: 
120. He referred 10 of his friends. When they joined, John’s position 
will go to 110)
- Once a customer reaches Position 1, he will receive an email with a 
coupon code to purchase the new product.
So this involves:
An administrator area:
1.Create, edit, read, list, delete a wait list
2.View the customers who signed up for the waiting list.
Frontend:
1. A sign up form for a potential customer to enter his email address 
and join the waiting list
2. Show them their position as soon as they signed up.
3. Receive a unique link as soon as a customer signed up
4. Receive the email as soon as the customer reaches the Position 1
NOTE:
We have intentionally left out some of the minute details required for this 
application. Use your creativity while developing the application.
Clue: Think you are in a Game. The more invites you do, the best chance of
getting to the top position.


<----------------- Task Done ---------------------->

1). LANDING PAGE:

1.1) LANDING PAGE : IMAGE => 

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/671ed1c3-74a5-4968-884d-01768b15f43e)

1.2) LANDING PAGE : DESCRIPTION => 

A SIMPLE LANDING PAGE FOR A PRODUCT WAS GOING TO LAUNCH


2). REGISTER PAGE :

2.1) REGISTER PAGE : IMAGE =>

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/1933790e-4e2f-4274-855f-a727715f1da3)

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/e7cb4b18-2fbc-4881-bf1d-5ab7a720e2a8)

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/4b668774-214a-4576-a56f-6db26cffb0be)

2.2) REGISTER PAGE : DESCRIPTION => 

A REGISTRATION PAGE WITHOUT REGEX; INSTEAD, I HAVE UTILIZED THE 'REQUIRED' ATTRIBUTE IN HTML FOR NOW. FURTHERMORE, I HAVE IMPLEMENTED A CHECK TO VERIFY WHETHER THE PROVIDED EMAIL ID IS ALREADY REGISTERED OR NOT.


3). LOGIN PAGE :

3.1) LOGIN PAGE : IMAGE =>

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/d39b42e6-7f4f-4d1e-a31c-b2db6734956e)

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/f4e84cdd-1033-4370-9a44-fb60409d1cd5)

IF WE TRY TO LOGIN WITH THE SAME EMAIL ID IT ALERT US USER REGISTRATION FAILED.

![image](./assets/sample-page.jpg)

3.2) LOGIN PAGE : DESCRIPTION => 

A LOGIN PAGE WITHOUT REGEX; INSTEAD, I HAVE USED THE "REQUIRED" ATTRIBUTE IN HTML FOR NOW. IT VERIFIES WHETHER THE USER IS ALREADY REGISTERED OR NOT


4). LANDING PAGE :

4.1) LANDING PAGE : IMAGE =>

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/81647e90-e240-4bff-a6fd-8813922a71a1)

SHOULD THE USER WISH TO SHARE A LINK WITH THEIR FRIENDS, THEY CAN CREATE THE LINK BY UTILIZING THE 'GENERATE' BUTTON.

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/db531820-20f3-44b2-b3e4-e7f1eabde2f4)

4.2) LANDING PAGE : DESCRIPTION => 

IN THIS, THE USER CAN VIEW THE PRODUCT DETAILS OF THE IMAGE AND CAN SHARE HIS LINK TO REFER AND RECEIVE A COUPON CODE. AFTER OBTAINING A COUPON CODE THROUGH EMAIL, HE CAN PROCEED TO BOOK THE ORDER.


5). USER WAIT LIST PAGE : 

5.1) USER WAIT LIST PAGE : IMAGE => 

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/66ec1456-9dc6-4b6e-a673-6ec5cd1f0d14)

DONT CONFUSE WITH THE NAME OF THE USER I HAVE DONE WHAT THE PROJECT SAYS EMAIL ID SHOULD BE UNIQUE, SO IF NEED WE CAN ALSO MAKE THE USER NAME ALSO UNIQUE FOR YOUR REFERNCE REFER BELOW DATABASE.

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/f7721693-f987-4d47-8126-f7d45c7df557)

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/ee9ddb63-56a3-4f19-8937-8c01f30225c6)

5.2) USER WAIT LIST PAGE : DESCRITION =>

ON THIS PAGE, IT DISPLAYS THE OVERALL USERS WHO HAVE REGISTERED, ALONG WITH THEIR POSITION TO RECEIVE THE COUPON CODE. IF A USER REACHES THE FIRST POSITION (1), THEY WILL BE CONSIDERED THE WINNER, AND AN EMAIL CONTAINING THE COUPON CODE WILL BE SENT.


6). ADMIN LOGIN PAGE :

6.1) ADMIN LOGIN PAGE : IMAGE => 

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/ad059279-5bd7-4c62-8fd7-70233cfa7d02)

ADMIN AND THE USER, LOGIN PAGE ARE SAME.

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/a8557eee-23aa-4456-8e10-37adcb0f7b07)

6.2) ADMIN LOGIN PAGE : DESCRITION =>

SAME LANDING PAHE FOR THE ADMIN ALSO TO VIEW THE "PRODUCT BOOKING PAGE" BUT THE ADMIN CANT ABLE TO GENERATE THE COUPON CODE.

7). ADMIN USER LIST PAGE :

7.1) ADMIN USER LIST PAGE : IMAGE => 

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/449ac4b9-96ad-4f5a-b8b9-630cd411e68d)

7.1) ADMIN USER LIST PAGE : DESCRITION =>

THE ADMIN CAN SEE THE LIST OF USER IN THE WAIT LIST PAGE AND ALSO CAN EDIT,

=> CREATE NEW USER

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/3d373e0f-44cd-4316-b10c-b6b09eb53173)

=> EDIT AND DELETE USER

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/6b72bfe8-4cd4-41b8-9fc0-d4840466f9ab)

=> EDITING THE USER7 TO USER77 NOW

BEFORE EDIT => IMAGE :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/f2a536d4-0809-4686-ac2f-c546fd94bb83)

AFTER EDIT => IMAGE :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/0f289645-ac54-42ef-b0c8-56d9fff7e200)

LIKEWISE WE CAN DELETE THE USER ALSO (DELETING THE USER77) :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/0aa98258-c9d3-43a4-a18a-0137c888731c)

8). RECEIVE EMAIL UPON ATTAINING THE WINNING POSITION

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/aa2aa784-9c9a-4788-8175-c7b2c1c1a70c).


RESPONSIVE IMAGE OF IPHONE 14 PROMAX:
LANDING PAGE : 

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/cbacc45d-3af9-42c3-98c9-1d1914e165cb)

REGISTER PAGE :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/97c19c68-aace-4cf1-b296-2949beda3f0c)

LOGIN PAGE :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/86b86dee-1814-4365-967d-58b393dfd1c6)

HOME PAGE :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/da9b4619-5a56-4a7c-bec5-3e053469f744)

USER LIST PAGE OF USER WITH OPEN-MENU :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/5271635d-5333-45bd-8ab2-e9f125b8eb28)

USER LIST PAGE OF ADMIN :

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/f27a78e5-737b-4df9-ab27-a1a958a8966a)

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/36d17827-496f-436d-9b46-c0a20e4eac1d)

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/8160862f-25b4-4265-93b5-02c7508b51fd)

![image](https://github.com/Aravind6023/waitling_list/assets/135958235/c3f8524d-0dbf-4e65-94f2-3b62af32f48c)

THIS PROJECT TAKE'S ME 3 1/2 DAYS TO COMPLETE
TASK CAN BE DONE IF I HAVE TIME :
1). CAN DO REGEX 
2). CAN USE JWT FOR AUTHORIZATION AND AUTHENTICATION(SETTING THE TIME PERIOD FOR THE ADMIN (MAINLY)).

