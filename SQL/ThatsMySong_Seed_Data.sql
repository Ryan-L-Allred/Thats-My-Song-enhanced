USE [ThatsMySong];
GO

set identity_insert [UserType] on
insert into [UserType] ([Id], [Name]) VALUES (1, 'Admin');
insert into [UserType] ([Id], [Name]) VALUES (2, 'User');
set identity_insert [UserType] off

set identity_insert [UserProfile] on
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (1, 'Evangelos', 'evangelos@evangelos.com', 1, 'Ow1UsQvK7Palvlf6mwfRf7sHkp02'); 
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (2, 'Alfred', 'ryan@ryan.com', 2, 'uPT1br23m4TTd9nHG1nK7jTUXOg2');
insert into [UserProfile] (Id, [Name], Email, UserTypeId, FirebaseUserId) values (3, 'Ryan', 'allred@allred.com', 2, 'fgfnsGmMRcUvaiBh50aI7MfoLSc2');
set identity_insert [UserProfile] off

set identity_insert [Genre] on
insert into [Genre] (Id, [Name]) values (1, 'Hip Hop');
insert into [Genre] (Id, [Name]) values (2, 'Jazz');
insert into [Genre] (Id, [Name]) values (3, 'Funk');
insert into [Genre] (Id, [Name]) values (4, 'Rock');
insert into [Genre] (Id, [Name]) values (5, 'R&B');
insert into [Genre] (Id, [Name]) values (6, 'Soul');
set identity_insert [Genre] off

set identity_insert [Song] on
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (1, 'Electric Relaxation', 'Midnight Marauders', 'A Tribe Called Quest', 1, 1);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (2, 'Mystic Brew', 'Two-Headed Freap', 'Ronnie Foster', 2, 2);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (3, 'Jagger the Dagger', 'Headless Heroes of the Apocalypse', 'Eugene McDaniels', 6, 2);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (4, 'Black Sunday', 'Stress: The Extinction Agenda', 'Organized Konfusion', 1, 1);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (5, 'Nowhere to Run, Nowhere to Hide', '6 Feet Deep', 'Gravediggaz', 1, 1);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (6, 'Peg', 'Aja', 'Steely Dan', 4, 3);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (7, '(Sittin On)the Dock of the Bay', 'The Dock of the Bay', 'Otis Redding', 6, 2);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (8, 'Eye Know' , '3 Feet High and Rising', 'De La Soul', 1, 1);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (9, 'We Live in Brooklyn, Baby', 'He''s Coming', 'Roy Ayers Ubiquity', 3, 3);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (10, 'Brooklyn', 'Black on Both Sides', 'Mos Def', 1, 1);
insert into [Song] (Id, Title, AlbumName, ArtistName, GenreId, UserProfileId) values (11, 'Borough Check', 'Blowout Comb', 'Digable Planets', 1, 1);
set identity_insert [Song] off

set identity_insert [Sample] on
insert into [Sample] (Id, SongId, SampledSongId) values (1, 1, 2);
insert into [Sample] (Id, SongId, SampledSongId) values (2, 4, 3);
insert into [Sample] (Id, SongId, SampledSongId) values (3, 5, 3);
insert into [Sample] (Id, SongId, SampledSongId) values (4, 8, 6);
insert into [Sample] (Id, SongId, SampledSongId) values (5, 8, 7);
insert into [Sample] (Id, SongId, SampledSongId) values (6, 10, 9);
insert into [Sample] (Id, SongId, SampledSongId) values (7, 11, 9);
set identity_insert [Sample] off

