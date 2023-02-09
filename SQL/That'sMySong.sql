 USE [master]

IF db_id('ThatsMySong') IS NULL
	CREATE DATABASE [ThatsMySong]
GO

USE [ThatsMySong]
GO

DROP TABLE IF EXISTS [Sample];
DROP TABLE IF EXISTS [Song];
DROP TABLE IF EXISTS [Genre];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [UserType];
GO



CREATE TABLE [UserType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [UserTypeId] int NOT NULL,
  [FirebaseUserId] nvarchar(255) UNIQUE NOT NULL

  --CONSTRAINT [FK_UserProfile_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
)
GO



CREATE TABLE [Song] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  [AlbumName] nvarchar(255) NOT NULL,
  [ArtistName] nvarchar(255) NOT NULL,
  [GenreId] int NOT NULL,
  [UserProfileId] int NOT NULL

  --CONSTRAINT [FK_Song_Genre] FOREIGN KEY ([GenreId]) REFERENCES [Genre] ([Id]),
  --CONSTRAINT [FK_Song_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)
GO

CREATE TABLE [Sample] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [SongId] int NOT NULL,
  [SampledSongId] int NOT NULL

  --CONSTRAINT [FK_Sample_Song] FOREIGN KEY ([SongId]) REFERENCES [Song] ([Id]),
  --CONSTRAINT [FK_Sample_SampledSong] FOREIGN KEY ([SampledSongId]) REFERENCES [Song] ([Id])
)
GO

CREATE TABLE [Genre] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([SongId]) REFERENCES [Song] ([Id])
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([SampledSongId]) REFERENCES [Song] ([Id])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
GO

ALTER TABLE [Song] ADD FOREIGN KEY ([GenreId]) REFERENCES [Genre] ([Id])
GO

ALTER TABLE [Song] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO
