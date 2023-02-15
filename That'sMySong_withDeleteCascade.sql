CREATE TABLE [UserType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [UserTypeId] int NOT NULL,
  [FirebaseUserId] nvarchar(255) UNIQUE NOT NULL
)
GO

CREATE TABLE [Song] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  [AlbumName] nvarchar(255) NOT NULL,
  [ArtistName] nvarchar(255) NOT NULL,
  [GenreId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [Sample] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [SongId] int NOT NULL,
  [SampledSongId] int NOT NULL
)
GO

CREATE TABLE [Genre] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([SongId]) REFERENCES [Song] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([SampledSongId]) REFERENCES [Song] ([Id])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
GO

ALTER TABLE [Song] ADD FOREIGN KEY ([GenreId]) REFERENCES [Genre] ([Id])
GO

ALTER TABLE [Song] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO
