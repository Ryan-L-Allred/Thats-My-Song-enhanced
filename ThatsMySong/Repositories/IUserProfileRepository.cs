using ThatsMySong.Models;

namespace ThatsMySong.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetById(int id);
        void Add(UserProfile userProfile);
    }
}
