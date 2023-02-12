--SELECT sa.Id, sa.SongId, 
--	                                  s.Title as SongTitle , s.AlbumName as SongAlbumName, s.ArtistName as SongArtistName,
--                                      s.UserProfileId as SongUserProfileId,

--	                                  g.Name as SongGenreName,

--	                                  sa.SampledSongId,
--	                                  ss.Title as SampleTitle, ss.AlbumName as SampleAlbumName, ss.ArtistName as SampleArtistName,
--                                      ss.UserProfileId as SampleUserProfileId,

--	                                  gg.Name as SampleGenreName

--                                      FROM Sample sa
--	                                  JOIN Song s ON sa.SongId = s.Id
--	                                  JOIN Genre g ON s.GenreId = g.Id
--	                                  JOIN Song ss ON sa.SampledSongId = ss.Id
--	                                  JOIN Genre gg ON ss.GenreId = gg.Id
                                     
	   
	
	--SELECT Id, Title, AlbumName, ArtistName, GenreId, UserProfileId
	--FROM Song 
	--WHERE  GenreId != 1
	--ORDER by Title;

	SELECT s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
                               g.Name as GenreName
	                    FROM Song s
                        JOIN Genre g On s.GenreId = g.Id
	                    WHERE  g.Name != 'Hip Hop'
                        ORDER by Title