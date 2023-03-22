# Thats My Song

<img src="ThatsMySong_Screenshot.png" width="100%" />

That's My Song is a full-stack application designed to introduce die-hard hip hop fans and general music lovers to new music through the use of samples. This is accomplished through access to a database of different songs of varying genres and the ability to assign songs to one another on a separate samples page. 

<a href="https://www.youtube.com/watch?v=Ok9PwjfdD1k&t=44s">Click here to view demo</a>

## How It's Made:
**Technologies used: React.js, C#, .NET, SQL, & SQLServer

That's My Song is powered by React.js in the front-end and C# in the back-end. The Web API was built in ASP.NET Core and all data was fetched from SQL Server. The layout of That's My Song was created using Bootstrap.

For authentication I utilized Google Firebase. The code involving authentication and authorization was boiler plate code.

## ERD

<img src="That'sMySong.png" width="70%" />

## Optimization

If I had more time, I would actually go back and refactor my many-to-many relationship between the different songs in order to prevent future issues. Instead of having the songs from every genre on one table, I would create a table strictly for hip hop songs and another table strictly for sampled songs, both of which would be connected by a join table. To avoid redundancy, I would also set up separate tables for albums and artists as well. I believe this would have provided more flexibility with how the data would interact with each other and it would improve the overall user experience.   

