using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Comment : BaseEntity
    {
        public Guid PostId { get; set; }
        public Post Post { get; set; }
        public string Content { get; set; }
        public Guid ParentCommentId { get; set; }
        public Guid AccountId { get; set; }
        public Account Account { get; set; }
        public uint NumLike { get; set; }
    }
}
