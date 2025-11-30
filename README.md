# Ostrich Talks API

Welcome to the Ostrich Talks API repository! This project is a full-featured communication learning platform API built for cross platforms Android and iOS using React Native Expo,. This robust api includes level design, followers and following, leader board (league), streak, rewards, quests for engagement of playing levels to improve communications and behaviour of user.

# Tech Stack
- Express.js 
- Node.js
- MongoDB

# Design
## Streak
A streak is represent a decipline but here we have five levels for each day so it give motivation to do more on a single day 
- streak 1: Fiery Streak!
- streak 2: Blazer streak!
- streak 3: Turbo streak!
- streak 4: Inferno streak!
- streak 5: Supernova streak.

A banner in the top give a motivation to achieve next streak. once reached streak 5 banner should say congrats and do more.

## Leader Board ( League )
There are 10 Leagues each will have 20 person in the leaderboard, Users are segregated according to various factors to stay in the leaderboard (Sort users according to theire xp levels accumulated within a week)
<br>
<br>
Each Week user should be promoted to next League or demoted to lower league or stay in the same league according to their performance and xp levels

### League Levels
1. Bronze
2. Silver
3. Gold
4. Platinum
5. Diamond
6. Master
7. Grand Master
8. Challenger
9. Iron
10. Emerald

## Rewards 
Each small and big wins are celeberated and given batch for the achievements to stay user motivated 
<br>
<br>
Daily and Weekly quest are used to hook the user to perform better training and get rewards 

## Profile 
Profile page have a avatar for user it can be customised like snapchat this avatar was used in the leaderboards and levels storyline 
<br>
<br>
For social activities user have followers and following friends options so each rewards and batchs are used to flex with friends and motivate both to do more lessions and learn and improve themselves
<br>
<br>
Friend suggestions are done using their contact they give permission or suggestion based on various factors like location

## Authentication 
For authentication we can rely on Firebase Auth right now. for reducing headache

## Voice Levels validations
check the input audio and convert it into text then verify against answer text for vocal strength and grammatical error then respond the result of validation

## Alter Ego (Featured)
Not yet fully derived idea!
For each user there is one or more alter ego created according to their behaviour. this will be available during lession story line it will give some idealogy when doing lessions to improve their behaviour unconciously.