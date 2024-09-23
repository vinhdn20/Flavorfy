using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class BaseEntities
    {
        public Guid Id { get; set; }
        public Guid UpdateId { get; set; }
        public long UpdateTime { get; set; }
        public Guid CreateId { get; set; }
        public long CreateTime { get; set; }
    }
}
