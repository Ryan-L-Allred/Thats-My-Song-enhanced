SELECT sa.SampledSongId,
	   s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
	   g.Name as GenreName

  FROM Sample sa
	 JOIN Song s ON  sa.SampledSongId = s.Id
	 JOIN Genre g ON s.GenreId = g.Id
	 ORDER BY Title;
	
	 