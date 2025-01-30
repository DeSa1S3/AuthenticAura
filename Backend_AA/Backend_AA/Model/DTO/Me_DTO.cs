namespace Backend_AA.Model.DTO
{
    public class Me_DTO
    {
        public int Id { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string DateOfBirth { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string[] Roles { get; set; }
    }
}
