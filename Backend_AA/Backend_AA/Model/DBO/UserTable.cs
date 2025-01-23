using System.ComponentModel.DataAnnotations;

namespace Backend_AA.Model.DBO
{
    public class UserTable
    {
        [Key]
        public int Id { get; set; }

        public string firstName { get; set;}

        public string lastName { get; set; }

        public string DateOfBirth { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }


    }
}
