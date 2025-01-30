using System.ComponentModel.DataAnnotations;

namespace Backend_AA.Model.DBO
{
    public class UserReviews
    {
        [Key]
        public int Id { get; set; }
        public int UserID { get; set; }
        public string Text { get; set; }
    }
}
