using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Post : BaseEntities
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public TypeOfPost TypeOfPost { get; set; }
        public uint NumLike { get; set; }
        public Guid AccountId { get; set; }
        public Account Account { get; set; }

        public virtual List<Comment> Comments { get; set; }
    }

    public enum TypeOfPost
    {
        Video,
        Image
    }
}
