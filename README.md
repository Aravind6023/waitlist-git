
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

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/869f0a79-6bb7-4342-aa41-81e5cc1acfe4)

1.2) LANDING PAGE : DESCRIPTION => 

A SIMPLE LANDING PAGE FOR A PRODUCT WAS GOING TO LAUNCH


2). REGISTER PAGE :

2.1) REGISTER PAGE : IMAGE =>

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/d993e687-3a86-4363-8ac8-3bcaf4199f65)

=> REGISTERING THE NEW USER : IMAGE

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/222649f1-96ad-4c76-8751-ebbdc8cfb479)

=> USER ALREADY REGISTER WITH THE SAME EMAIL ID MEANS HE WILL GET THE ERROR : IMAGE

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/26b91644-d42a-439b-bd8d-090a3c6be36e)

2.2) REGISTER PAGE : DESCRIPTION => 

A REGISTRATION PAGE WITHOUT REGEX; INSTEAD, I HAVE UTILIZED THE 'REQUIRED' ATTRIBUTE IN HTML FOR NOW. FURTHERMORE, I HAVE IMPLEMENTED A CHECK TO VERIFY WHETHER THE PROVIDED EMAIL ID IS ALREADY REGISTERED OR NOT.


3). LOGIN PAGE :

3.1) LOGIN PAGE : IMAGE =>

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/8641fbce-e824-4f80-b586-c47978c95b7f)

IF WE TRY TO LOGIN WITH THE SAME EMAIL ID AGAIN IT ALERT US USER REGISTRATION FAILED.

=> LOGIN BY VALID USER : IMAGE

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/e1a37473-7021-49ef-a12e-f3ff9d581dac)

=> EMAIL AND THE PASSWORD DOES NOT MATCH WITH THE DATABASE IT ALERTS THE USER: IMAGE

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/351600e2-e283-461c-a5b0-57deabbd4b20)

3.2) LOGIN PAGE : DESCRIPTION => 

A LOGIN PAGE WITHOUT REGEX; INSTEAD, I HAVE USED THE "REQUIRED" ATTRIBUTE IN HTML FOR NOW. IT VERIFIES WHETHER THE USER IS ALREADY REGISTERED OR NOT


4). LANDING PAGE :

4.1) LANDING PAGE FOR USER : IMAGE =>

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/9c061519-1c33-413e-be8d-5ecd18440ea8)

SHOULD THE USER WISH TO SHARE A LINK WITH THEIR FRIENDS, THEY HE CAN CREATE THE LINK BY UTILIZING THE 'GENERATE' BUTTON AND CAN COPY AND SHARE : IMAGE

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/1d2d6473-d7c9-46bf-bf94-b35d5711f785)

4.2) LANDING PAGE : DESCRIPTION => 

IN THIS, THE USER CAN VIEW THE PRODUCT DETAILS OF THE IMAGE AND CAN SHARE HIS LINK TO REFER AND RECEIVE A COUPON CODE. AFTER OBTAINING A COUPON CODE THROUGH EMAIL, HE CAN PROCEED TO BOOK THE ORDER.


5). USER WAIT LIST PAGE : 

5.1) USER WAIT LIST PAGE : IMAGE => 

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/0d33490d-bb54-451a-8325-e297a2c395f4)

DONT CONFUSE WITH THE NAME OF THE USER I HAVE DONE WHAT THE PROJECT SAYS EMAIL ID SHOULD BE UNIQUE, SO IF NEED WE CAN ALSO MAKE THE USER NAME ALSO UNIQUE FOR YOUR REFERNCE REFER BELOW DATABASE.

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/68890193-3ef3-4745-a2c6-c17066ec719a)

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/cccad5fe-4881-45a6-be38-dd71c0185cdf)

5.2) USER WAIT LIST PAGE : DESCRITION =>

ON THIS PAGE, IT DISPLAYS THE OVERALL USERS WHO HAVE REGISTERED, ALONG WITH THEIR POSITION TO RECEIVE THE COUPON CODE. IF A USER REACHES THE FIRST POSITION (1), THEY WILL BE CONSIDERED THE WINNER, AND AN EMAIL CONTAINING THE COUPON CODE WILL BE SENT.


6). ADMIN LOGIN PAGE :

6.1) ADMIN LOGIN PAGE : IMAGE => 

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/23478cb2-1345-4a4f-8b90-af6123962eb7)

ADMIN AND THE USER, LOGIN PAGE ARE SAME.

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/06c5e278-b826-4a1e-8109-305feb54655e)

6.2) ADMIN LOGIN PAGE : DESCRITION =>

SAME LANDING PAHE FOR THE ADMIN ALSO TO VIEW THE "PRODUCT BOOKING PAGE" BUT THE ADMIN CANT ABLE TO GENERATE THE COUPON CODE.

7). ADMIN USER LIST PAGE :

7.1) ADMIN USER LIST PAGE : IMAGE => 

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/6e74a3da-ba21-49d5-ae7c-cbb5393533e2)

7.1) ADMIN USER LIST PAGE : DESCRITION =>

THE ADMIN CAN SEE THE LIST OF USER IN THE WAIT LIST PAGE AND ALSO CAN EDIT,

=> CREATE NEW USER

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/8f3f5291-c077-4f1b-ab3c-d9abf7163ad9)

=> EDIT AND DELETE USER

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/8adcd388-81a0-4b32-98f7-a00dbfc5e987)

=> EDITING THE USER8 TO USER88 NOW

BEFORE EDIT => IMAGE :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/19888e4a-8650-4624-9c94-c2a3fdbcd075)

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/d447a145-34fd-4859-b52a-63f1cf122b36)

AFTER EDIT => IMAGE :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/890916e5-3644-41ad-8cd6-54646b735d1a)

LIKEWISE WE CAN DELETE THE USER ALSO (DELETING THE USER88) => IMAGE :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/d323f589-5bb1-4938-8d9d-418c1481bff2)

8). RECEIVE EMAIL UPON ATTAINING THE WINNING POSITION

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/2c5ad1ab-9271-42f7-930c-e7a18a90fad3)


RESPONSIVE IMAGE OF IPHONE 14 PROMAX:
LANDING PAGE : 

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/bc614dd3-8a49-41ab-87a6-b18573482e8f)

REGISTER PAGE :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/7e9db5cb-dc5a-4e58-a887-37c7e6f9c7d7)

LOGIN PAGE :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/6764d7fd-52a1-4257-bf87-6a2905dbb11e)

HOME PAGE :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/0d79dfd5-e0c7-4673-846e-569afec4cf59)

USER LIST PAGE OF USER WITH SHOW-NAVBAR :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/34eb2d4e-f957-4610-bcc8-da5b1679b200)

USER LIST PAGE OF ADMIN :

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/6415f524-1459-4e62-a960-30d275015488)

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/ead99308-9a3b-4852-9853-c3f6e47b02ac)

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/5e1022b5-f601-44a9-9116-82ad1add4589)

![image](https://github.com/Aravind6023/waitlist-git/assets/135958235/6a0e7125-f9fe-41fd-abaf-6e92a3973e98)

THIS PROJECT TOOK ME 2 1/2 DAYS TO COMPLETE
TASK CAN BE DONE IF I HAVE TIME :
1). CAN DO REGEX 
2). CAN USE JWT FOR AUTHORIZATION AND AUTHENTICATION(SETTING THE TIME PERIOD FOR THE ADMIN (MAINLY)).

