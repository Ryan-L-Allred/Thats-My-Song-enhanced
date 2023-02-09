SELECT sa.SongId, 
	   s.Id, s.Title as SongTitle , s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
	   g.Name as GenreName,
	   sa.SampledSongId,
	   ss.Id, ss.Title as SampleSongTitle, ss.AlbumName, ss.ArtistName, ss.GenreId, ss.UserProfileId,
	   gg.Name as SampleGenreName
  FROM Sample sa
	JOIN Song s ON sa.SongId = s.Id
	JOIN Genre g ON s.GenreId = g.Id
	JOIN Song ss ON sa.SampledSongId = ss.Id
	JOIN Genre gg ON ss.GenreId = gg.Id
    ORDER by SongTitle
	   
	
	SELECT Id, Title, AlbumName, ArtistName, GenreId, UserProfileId
	FROM Song 
	WHERE  GenreId = 1
	ORDER by Title;