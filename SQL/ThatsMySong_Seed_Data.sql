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

set identity_insert [Artist] on
insert into [Artist] (Id, [Name]) values (1, 'A Tribe Called Quest');
insert into [Artist] (Id, [Name]) values (2, 'Ronnie Foster');
insert into [Artist] (Id, [Name]) values (3, 'Eugene McDaniels');
insert into [Artist] (Id, [Name]) values (4, 'Organized Konfusion');
insert into [Artist] (Id, [Name]) values (5, 'Gravediggaz');
insert into [Artist] (Id, [Name]) values (6, 'Steely Dan');
insert into [Artist] (Id, [Name]) values (7, 'Otis Redding');
insert into [Artist] (Id, [Name]) values (8, 'De La Soul');
insert into [Artist] (Id, [Name]) values (9, 'Roy Ayers Ubiquity');
insert into [Artist] (Id, [Name]) values (10, 'Mos Def');
insert into [Artist] (Id, [Name]) values (11, 'Digable Planets');
set identity_insert [Artist] off

set identity_insert [Album] on
insert into [Album] (Id, Title, ArtistId, GenreId) values (1, 'Blowout Comb', 11, 1);
insert into [Album] (Id, Title, ArtistId, GenreId) values (2, 'Black on Both Sides', 10, 1);
insert into [Album] (Id, Title, ArtistId, GenreId) values (3, 'He''s Coming', 9, 3);
insert into [Album] (Id, Title, ArtistId, GenreId) values (4, 'Midnight Marauders', 1, 1);
insert into [Album] (Id, Title, ArtistId, GenreId) values (5, 'The Dock of the Bay', 7, 6);
insert into [Album] (Id, Title, ArtistId, GenreId) values (6, 'Headless Heroes of the Apocalypse', 3, 6);
insert into [Album] (Id, Title, ArtistId, GenreId) values (7, '3 Feet High and Rising', 8, 1);
insert into [Album] (Id, Title, ArtistId, GenreId) values (8, 'Aja', 6, 4);
insert into [Album] (Id, Title, ArtistId, GenreId) values (9, 'Stress: the Extinction Agenda', 5, 1);
insert into [Album] (Id, Title, ArtistId, GenreId) values (10, 'Two-Headed Freap', 2, 2);
insert into [Album] (Id, Title, ArtistId, GenreId) values (11, '6 Feet Deep', 5, 1);
set identity_insert [Album] off

set identity_insert [HipHopSong] on
insert into [HipHopSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (1, 'Electric Relaxation', 4, 1, 1, 1);
insert into [HipHopSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (2, 'Black Sunday', 9, 4, 1, 1);
insert into [HipHopSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (3, 'Nowhere to Run, Nowhere to Hide', 11, 5, 1, 1);
insert into [HipHopSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (4, 'Eye Know' , 7, 8, 1, 1);
insert into [HipHopSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (5, 'Brooklyn', 2, 10, 1, 1);
insert into [HipHopSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (6, 'Borough Check', 1, 11, 1, 1);
set identity_insert [HipHopSong] off

set identity_insert [SampledSong] on
insert into [SampledSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (1, 'Mystic Brew', 10, 2, 2, 2);
insert into [SampledSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (2, 'Jagger the Dagger', 6, 3, 6, 2);
insert into [SampledSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (3, 'Peg', 8, 6, 4, 3);
insert into [SampledSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (4, '(Sittin On)the Dock of the Bay', 5, 7, 6, 2);
insert into [SampledSong] (Id, Title, AlbumId, ArtistId, GenreId, UserProfileId) values (5, 'We Live in Brooklyn, Baby', 3, 9, 3, 3);
set identity_insert [SampledSong] off

set identity_insert [Sample] on
insert into [Sample] (Id, HipHopSongId, SampledSongId) values (1, 1, 1);
insert into [Sample] (Id, HipHopSongId, SampledSongId) values (2, 2, 2);
insert into [Sample] (Id, HipHopSongId, SampledSongId) values (3, 3, 2);
insert into [Sample] (Id, HipHopSongId, SampledSongId) values (4, 4, 3);
insert into [Sample] (Id, HipHopSongId, SampledSongId) values (5, 4, 4);
insert into [Sample] (Id, HipHopSongId, SampledSongId) values (6, 5, 5);
insert into [Sample] (Id, HipHopSongId, SampledSongId) values (7, 6, 5);
set identity_insert [Sample] off

