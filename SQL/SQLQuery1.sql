SELECT sa.SongId, sa.SampledSongId,
	   s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId
	   --up.Name as UserName,
	   --g.Name as GenreName
  FROM Sample sa
	 RIGHT JOIN Song s ON sa.SongId = s.Id AND sa.SampledSongId = s.Id
	 
	--LEFT JOIN UserProfile up On s.UserProfileId = up.Id
	 --JOIN Genre g ON s.GenreId = g.Id
	 ORDER BY Title;