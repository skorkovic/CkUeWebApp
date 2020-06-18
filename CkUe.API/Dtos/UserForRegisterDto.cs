using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        [Required]
        public string Password { get; set; }
        public string Phone { get; set; }
        public string livingPlace { get; set; }
        public string livingAddress { get; set; }
        public string SchoolFaculty { get; set; }
        public string Job { get; set; }
        public string BirthPlace { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime VolunteeringStartDate { get; set; }
        public string Recommended { get; set; }
        public string Uvn { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public int CreatedBy { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}