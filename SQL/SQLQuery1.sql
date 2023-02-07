SELECT s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
	   g.Name as GenreName
  FROM Song s
  JOIN Genre g ON s.GenreId = g.Id
  ORDER BY Title