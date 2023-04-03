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

CREATE TABLE [HipHopSong] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  [AlbumId] int NOT NULL,
  [ArtistId] int NOT NULL,
  [GenreId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [SampledSong] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  [AlbumId] int NOT NULL,
  [ArtistId] int NOT NULL,
  [GenreId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [Album] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  [ArtistId] int NOT NULL,
  [GenreId] int NOT NULL
)
GO

CREATE TABLE [Artist] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Sample] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [HipHopSongId] int NOT NULL,
  [SampledSongId] int NOT NULL
)
GO

CREATE TABLE [Genre] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([HipHopSongId]) REFERENCES [HipHopSong] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [Sample] ADD FOREIGN KEY ([SampledSongId]) REFERENCES [SampledSong] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [HipHopSong] ADD FOREIGN KEY ([AlbumId]) REFERENCES [Album] ([Id])
GO

ALTER TABLE [SampledSong] ADD FOREIGN KEY ([AlbumId]) REFERENCES [Album] ([Id])
GO

ALTER TABLE [HipHopSong] ADD FOREIGN KEY ([ArtistId]) REFERENCES [Artist] ([Id])
GO

ALTER TABLE [SampledSong] ADD FOREIGN KEY ([ArtistId]) REFERENCES [Artist] ([Id])
GO

ALTER TABLE [Album] ADD FOREIGN KEY ([ArtistId]) REFERENCES [Artist] ([Id])
GO

ALTER TABLE [Album] ADD FOREIGN KEY ([GenreId]) REFERENCES [Genre] ([Id])
GO

ALTER TABLE [SampledSong] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [HipHopSong] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [HipHopSong] ADD FOREIGN KEY ([GenreId]) REFERENCES [Genre] ([Id])
GO

ALTER TABLE [SampledSong] ADD FOREIGN KEY ([GenreId]) REFERENCES [Genre] ([Id])
GO
